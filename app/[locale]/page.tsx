import { getTranslations } from "next-intl/server";
import { AboutSection } from "../_components/about-section";
import { ContactSection } from "../_components/contact-section";
import { EducationSection } from "../_components/education-section";
import { ExperienceSection } from "../_components/experience-section";
import { Hero } from "../_components/hero";
import { OwnProductSection } from "../_components/own-product-section";
import { SiteHeader } from "../_components/site-header";
import { StackSection } from "../_components/stack-section";
import { StatsSection } from "../_components/stats-section";
import { profile } from "../_content/resume";

export default async function Home() {
  const t = await getTranslations("profile");

  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 sm:px-6">
        <Hero />
        <AboutSection />
        <StatsSection />
        <ExperienceSection />
        <OwnProductSection />
        <StackSection />
        <EducationSection />
        <ContactSection />
      </main>
      <footer className="border-t border-line py-6 text-center text-sm text-muted">
        {profile.fullName} · {t("role")}
      </footer>
    </>
  );
}
