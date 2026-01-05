"use client";

import Image from "next/image";
import { Road_Rage } from "next/font/google";
import { useState } from "react";

const roadRage = Road_Rage({
  weight: "400",
  subsets: ["latin"],
});

/* ===============================
   UNDERLINE INPUT (SCROLLABLE)
================================ */
const UnderlineInput = ({ minWidth }) => {
  const [value, setValue] = useState("");

  return (
    <span
      className="relative inline-block align-baseline"
      style={{ width: minWidth }}
    >
      {/* INPUT */}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`
          ${roadRage.className}
          w-full
          bg-transparent
          outline-none
          border-none
          text-gray-600
          text-[24px]
          absolute
          left-1
          pr-2
          -bottom-[5px]
          z-10
          whitespace-nowrap
          overflow-x-auto
        `}
      />

      {/* UNDERLINE */}
      <span className="block border-b-2 border-black w-full"></span>
    </span>
  );
};

const ContactForm = () => {
  /* ===============================
     BUTTON STATE
  ================================ */
  const [btnState, setBtnState] = useState("default");
  // default | hover | active

  const getBtnSrc = () => {
    if (btnState === "active")
      return "/assets/contact/contact-form-btn-onclick.svg";
    if (btnState === "hover")
      return "/assets/contact/contact-form-btn-hover.svg";
    return "/assets/contact/contact-form-btn-1.svg";
  };

  return (
    <section className="contact-section relative w-full h-[540px] xl:h-[630px] 2xl:h-[600px] overflow-hidden">
      {/* BACKGROUND */}
      <Image
        src="/assets/contact/contact-form-bg.svg"
        alt="Contact background"
        fill
        priority
        className="object-cover"
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1100px] mx-auto pt-[90px] xl:pt-[90px] 2xl:pt-[160px] text-center text-[#2b2b2b] leading-9 contact-form">
        {/* LINE 1 */}
        <p className={`${roadRage.className} text-[32px] right-5`}>
          My name is <UnderlineInput minWidth={120} /> and you can reach me at{" "}
          <UnderlineInput minWidth={220} />. I’m writing from{" "}
          <UnderlineInput minWidth={140} />.
        </p>

        {/* LINE 2 */}
        <p className={`${roadRage.className} text-[32px]`}>
          and would love to explore working together. Our website is{" "}
          <UnderlineInput minWidth={220} /> or we’re starting fresh.
        </p>

        {/* LINE 3 */}
        <p className={`${roadRage.className} text-[32px]`}>
          We’re looking for help with <UnderlineInput minWidth={260} />. Here’s
          a quick note about what we have in mind
        </p>

        {/* LINE 4 */}
        <p className={`${roadRage.className} text-[32px]`}>
          <UnderlineInput minWidth={420} />
        </p>

        {/* BUTTON */}
        <div className="mt-12 flex justify-center">
          <button
            type="submit"
            className={`
              transition-all
              duration-300
              ease-in-out cursor-pointer
              ${btnState === "hover" ? "pb-3" : "pb-0"}
            `}
            onMouseEnter={() => setBtnState("hover")}
            onMouseLeave={() => setBtnState("default")}
            onMouseDown={() => setBtnState("active")}
            onMouseUp={() => setBtnState("hover")}
          >
            <Image
              src={getBtnSrc()}
              alt="Send message"
              width={220}
              height={70}
              priority
              className="block"
            />
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 2000px) {
          .contact-section {
            height: 850px;
          }

          .contact-form {
            margin-top: 80px;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactForm;
