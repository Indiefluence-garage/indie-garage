"use client";

import Image from "next/image";
import { Road_Rage } from "next/font/google";
import "@/components/css/contactShutter.css"; // ✅ ONLY NEW IMPORT

const roadRage = Road_Rage({
  weight: "400",
  subsets: ["latin"],
});

const ContactShutter = () => {
  return (
    <section className="contact-shutter-section relative w-full h-screen overflow-hidden">
      
      {/* BACKGROUND (UNCHANGED) */}
      <Image
        src="/assets/contact/shutter-bg-1.png"
        alt="Shutter Background"
        fill
        priority
        className="object-fill opacity-60"
      />

      {/* CONTACT DETAILS (100% ORIGINAL – NOT TOUCHED) */}
      <div className="absolute left-[80px] xl:top-[70px] 2xl:top-[90px] z-10 text-[#FFBE05] space-y-3 contact-shutter-text ">
        <div >
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

      {/* MAP (ONLY NEW ADDITION) */}
      <div className="contact-map-wrapper">
  <div className="contact-map-panel">
    <div className="contact-map-inner">
      <img
        src="/assets/contact/map-1.png"
        alt="India Map"
        className="contact-map-img"
      />
    </div>
  </div>
</div>


    </section>
  );
};

export default ContactShutter;
