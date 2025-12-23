import Image from "next/image";

const FooterTopBanner = () => {
  return (
    <section className="w-full">
      <Image
        src="/assets/footer/footer-top-banner.svg"
        alt="Footer Banner"
        width={1920}        // natural banner width
        height={600}        // natural banner height
        priority
        className="w-full h-auto object-contain"
      />
    </section>
  );
};

export default FooterTopBanner;
