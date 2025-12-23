"use client";
import Image from "next/image";
import Link from "next/link";
import "../../components/css/footer.css";

const Footer = () => {
  return (
    <footer className="site-footer relative w-full h-[500px] 2xl:h-[650px]">

      {/* INNER WRAPPER (overflow isolated here) */}
      <div className="relative w-full h-full overflow-hidden">

        {/* BACKGROUND */}
        <Image
          src="/assets/footer/footer-bg.svg"
          alt="Footer background"
          fill
          priority
          className="object-cover"
        />

        {/* CONTENT */}
        <div className="relative z-10 w-full mx-auto h-full grid xl:grid-cols-[450px_1fr] 2xl:grid-cols-[550px_1fr]">

          {/* ================= LOGO ================= */}
          <div className="flex items-center justify-center xl:-mt-36">
            <Link href='/'>
            <Image
              src="/assets/navbar/inide-grage-logo.svg"
              alt="Indiefluence Garage"
              width={520}
              height={260}
              className="w-[280px] md:w-[320px] xl:w-[354.5px] xl:h-[160.92px] 2xl:w-[480px] 2xl:h-[240px]"
            />
            </Link>
          </div>

          {/* ================= RIGHT AREA ================= */}
          <div className="flex flex-col justify-center">

            {/* -------- ROW 1 -------- */}
            <div className="grid grid-cols-3 items-start h-[0px]">
              <div className="flex justify-start mt-5 2xl:ml-10 2xl:-mt-10 cursor-pointer">
                <Image
                  src="/assets/navbar/home-text.png"
                  alt="Home"
                  width={220}
                  height={90}
                  className="w-[140px] md:w-[170px] xl:w-[130px] 2xl:w-[170px] h-auto cursor-pointer"
                />
              </div>

              <div className="flex justify-start -ml-8 mt-5 2xl:-ml-4 2xl:-mt-10 cursor-pointer">
                <Image
                  src="/assets/navbar/about-text.png"
                  alt="About"
                  width={220}
                  height={90}
                  className="w-[140px] md:w-[170px] xl:w-[140px] 2xl:w-[170px] h-auto cursor-pointer"
                />
              </div>

              <div className="flex justify-start -ml-16 mt-5 xl:gap-x-8 2xl:gap-x-12 2xl:-ml-15 2xl:-mt-10 cursor-pointer">
                <Image src="/assets/footer/linkedin.png" alt="LinkedIn" width={120} height={120} className="w-[66px] 2xl:w-[80px]" />
                <Image src="/assets/footer/youtube.png" alt="YouTube" width={120} height={120} className="w-[66px] 2xl:w-[80px]" />
                <Image src="/assets/footer/insta.png" alt="Instagram" width={120} height={120} className="w-[66px] 2xl:w-[80px]" />
              </div>
            </div>

            {/* -------- ROW 2 -------- */}
            <div className="grid grid-cols-3 items-center h-[380px] cursor-pointer">
              <div className="flex justify-start 2xl:ml-8">
                <Image
                  src="/assets/navbar/services-text.png"
                  alt="Services"
                  width={260}
                  height={100}
                  className="w-[170px] md:w-[200px] xl:w-[191.74px] 2xl:w-[270px] h-auto cursor-pointer"
                />
              </div>

              <div className="flex justify-start -ml-8 2xl:-ml-4 cursor-pointer">
                <Image
                  src="/assets/navbar/work-text.png"
                  alt="Work"
                  width={220}
                  height={90}
                  className="w-[150px] md:w-[180px] xl:w-[122.43px] 2xl:w-[180px] h-auto"
                />
              </div>

              <div className="flex justify-start -ml-17 2xl:-ml-16 cursor-pointer">
                <Image
                  src="/assets/navbar/contact-text.png"
                  alt="Contact Us"
                  width={320}
                  height={110}
                  className="w-[190px] md:w-[220px] xl:w-[295.98px] 2xl:w-[340px] h-auto"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
