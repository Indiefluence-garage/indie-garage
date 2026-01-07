import Image from "next/image";

const FooterTopBanner = () => {
  return (
    <section className="w-full">
      {/* DESKTOP BANNER */}
      <div className="hidden md:block w-full">
        <Image
          src="/assets/footer/footer-top-banner.svg"
          alt="Footer Banner Desktop"
          width={1920}
          height={600}
          priority
          className="w-full h-auto object-contain"
        />
      </div>

      {/* MOBILE BANNER */}
      <div className="block md:hidden w-full h-[600px] relative">
        <Image
          src="/assets/footer/mobile-top-footer.png"
          alt="Footer Banner Mobile"
          fill
          priority
          className="object-fill"
        />
      </div>
    </section>
  );
};

export default FooterTopBanner;
