import ScrollExperience from "@/components/desktopSections/scroll/ScrollExperience";
import ClientsBanner from "@/components/shared/ClientsBanner";
import TestimonialSection from "@/components/desktopSections/testimonial/TestimonialSection";
import ContactForm from "@/components/desktopSections/ContactForm";
import ContactShutterBanner from "@/components/desktopSections/ContactShutterBanner";
import FooterTopBanner from "../shared/FooterTopBanner";


const DesktopHome = () => {
  return (
    <>
      <ScrollExperience />
      <TestimonialSection />
      <ClientsBanner/>
      <ContactForm />
      <ContactShutterBanner />
      <FooterTopBanner/>
    </>
  );
};

export default DesktopHome;
