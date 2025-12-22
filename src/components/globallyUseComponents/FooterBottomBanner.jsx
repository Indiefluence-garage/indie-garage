import Image from "next/image";

const FooterBottomBanner = () => {
  return (
    <section className="w-full">
      <Image
        src="/assets/footer/footer-bottom-banner.svg"
        alt="Footer Banner"
        width={1920}        // natural banner width
        height={600}        // natural banner height
        priority
        className="w-full h-auto object-contain"
      />
    </section>
  );
};

export default FooterBottomBanner;
