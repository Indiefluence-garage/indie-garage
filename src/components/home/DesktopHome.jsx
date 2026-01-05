import ScrollExperience from "@/components/desktopSections/scroll/ScrollExperience";
import HomeLoader from "@/components/shared/HomeLoader";
import ClientsBanner from "@/components/desktopSections/ClientsBanner";
import TestimonialSection from "@/components/desktopSections/testimonial/TestimonialSection";
import ContactForm from "@/components/desktopSections/ContactForm";
import ContactShutterBanner from "@/components/desktopSections/ContactShutterBanner";
import FooterTopBanner from "@/components/desktopSections/FooterTopBanner";

const DesktopHome = () => {
  return (
    <>
      <ScrollExperience />
      <HomeLoader />
      <TestimonialSection />
      <ClientsBanner />
      <ContactForm />
      <ContactShutterBanner />
      <FooterTopBanner />
    </>
  );
};

export default DesktopHome;
