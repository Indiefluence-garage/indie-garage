"use client";

import Image from "next/image";
import { Road_Rage } from "next/font/google";

const roadRage = Road_Rage({
  weight: "400",
  subsets: ["latin"],
});

const ContactShutterBanner = () => {
  return (
    <section className="relative w-full h-[800px] overflow-hidden">
      {/* BACKGROUND */}
      <Image
        src="/assets/shutter-banner.png"
        alt="Shutter Background"
        fill
        priority
        className="object-cover"
      />

      {/* TEXT */}
      <div className="absolute left-[80px] top-[50px] z-10 text-[#FFBE05] space-y-3">
        <div>
          <h3 className={`${roadRage.className} text-[64px]`}>
            CALL KARO:
          </h3>
          <p className={`${roadRage.className} text-[34px] text-[#FFDAA4] -mt-4`}>
            +91 12345 67890
          </p>
        </div>

        <div>
          <h3 className={`${roadRage.className} text-[64px]`}>
            MAIL ID:
          </h3>
          <p className={`${roadRage.className} text-[34px] text-[#FFDAA4] -mt-4`}>
            VENU@INDIEFLUENCE.IN
          </p>
        </div>

        <div>
          <h3 className={`${roadRage.className} text-[64px]`}>
            PATA:
          </h3>
          <p className={`${roadRage.className} text-[34px] text-[#FFDAA4] leading-tight -mt-2`}>
            PLOT NO. 151, SECTOR-2, INDUSTRIAL <br />
            AREA, KURUKSHETRA, HARYANA <br />
            136118
          </p>
        </div>

        <div>
          <h3 className={`${roadRage.className} text-[64px]`}>
            KAAM KA TIME:
          </h3>
          <p className={`${roadRage.className} text-[34px] text-[#FFDAA4] -mt-4`}>
            9 AM – 5 PM <br />
          </p>
          <p className={`${roadRage.className} text-[34px] text-[#FFDAA4] -mt-3`}>
            MON TO SAT
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactShutterBanner;
