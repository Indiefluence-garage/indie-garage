import Image from "next/image";

const FooterTopBanner = () => {
  return (
    <>
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
        <div className="block md:hidden w-full relative footer-mobile-banner">
          <Image
            src="/assets/footer/mobile-top-footer.png"
            alt="Footer Banner Mobile"
            fill
            priority
            className="object-fill"
          />
        </div>
      </section>

      {/* INTERNAL CSS */}
      <style>{`
        @media (max-width: 767px) {
          .footer-mobile-banner {
            height: 800px;
          }
        }

        @media (max-width: 500px) {
          .footer-mobile-banner {
            height: 700px;
          }
        }

        @media (max-width: 430px) and (min-width: 420px) {
          .footer-mobile-banner {
            height: 650px;
          }
        }

         @media (max-width: 419px) and (min-width: 400px) {
          .footer-mobile-banner {
            height: 620px;
          }
        } 

        @media (max-width: 378px) {
          .footer-mobile-banner {
            height: 570px;
          }
        }

        @media (max-width: 360px) {
          .footer-mobile-banner {
            height: 580px;
          }
        }

        @media (max-width: 320px) {
          .footer-mobile-banner {
            height: 500px;
          }
        }
      `}</style>
    </>
  );
};

export default FooterTopBanner;
