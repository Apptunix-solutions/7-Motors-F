import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesDisciplines } from "@/components/home/ServicesDisciplines";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { WorkshopGallery } from "@/components/home/WorkshopGallery";
import { PartnersStrip } from "@/components/home/PartnersStrip";
import { TeamExpert } from "@/components/home/TeamExpert";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { NeedHelpBanner } from "@/components/home/NeedHelpBanner";
import { NewsletterBand } from "@/components/home/NewsletterBand";
import { SITE } from "@/lib/site";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: `${SITE.name} — Luxury & Supercar Service Center in Riyadh`,
      description:
        "Riyadh's specialist service center for Ferrari, Lamborghini, Bentley, Porsche and the world's finest performance machines. Factory-trained. Obsessively meticulous.",
      path: "/",
    }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesDisciplines />
      <FeaturedWork />
      <WorkshopGallery />
      <PartnersStrip />
      <TeamExpert />
      <ReviewsSection />
      <NeedHelpBanner />
      <NewsletterBand />
    </>
  );
}
