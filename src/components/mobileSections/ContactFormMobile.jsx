"use client";

import Image from "next/image";
import { Road_Rage } from "next/font/google";
import { useState, useEffect, useRef } from "react";
import "@/components/css/contactFormMobile.css";

const roadRage = Road_Rage({
  weight: "400",
  subsets: ["latin"],
});

/* ================= UNDERLINE INPUT ================= */
const UnderlineInput = ({
  width,
  inputRef,
  maxLength,
  onFilled,
}) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const val = e.target.value;
    setValue(val);

    if (maxLength && val.length >= maxLength) {
      onFilled?.();
    }
  };

  return (
    <span className="m-input-wrap" style={{ width }}>
      <input
        ref={inputRef}
        value={value}
        onChange={handleChange}
        maxLength={maxLength}
        className={`${roadRage.className} m-input`}
      />
      <span className="m-underline" />
    </span>
  );
};

/* ================= MAIN COMPONENT ================= */
export default function ContactFormMobile() {
  const noteLine1Ref = useRef(null);
  const noteLine2Ref = useRef(null);

  const [allowScroll, setAllowScroll] = useState(false);

  /* 🔥 BUTTON STATE (DESKTOP LOGIC ADDED) */
  const [btnState, setBtnState] = useState("default");

  const getBtnSrc = () => {
    if (btnState === "active")
      return "/assets/contact/contact-form-btn-onclick.svg";
    if (btnState === "hover")
      return "/assets/contact/contact-form-btn-hover.svg";
    return "/assets/contact/contact-form-btn-1.svg";
  };

  useEffect(() => {
    const imgs = [
      "/assets/contact/contactform-bg-mobile.svg",
      "/assets/contact/contact-form-btn-1.svg",
      "/assets/contact/contact-form-btn-hover.svg",
      "/assets/contact/contact-form-btn-onclick.svg",
    ];

    imgs.forEach((src) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = src;
      document.head.appendChild(link);
    });
  }, []);

  return (
    <section className="m-contact">
      <div className="m-bg-container">
        <Image
          src="/assets/contact/contactform-bg-mobile.png"
          alt="Contact background mobile"
          fill
          priority
          className="m-bg"
          sizes="100vw"
        />
      </div>

      {/* Scroll locked until last underline filled */}
      <div
        className="m-content"
        style={{ overflowY: allowScroll ? "auto" : "hidden" }}
      >
        <p className={roadRage.className}>
          My name is <UnderlineInput width={90} /> and you can reach me at{" "}
          <UnderlineInput width={150} />.
        </p>

        <p className={roadRage.className}>
          I'm writing from <UnderlineInput width={120} /> and would love to work
          together.
        </p>

        <p className={roadRage.className}>
          Our website is <UnderlineInput width={160} /> or we're starting fresh.
        </p>

        <p className={roadRage.className}>
          We're looking for help with <UnderlineInput width={200} />. Here's a
          quick note about what we have in mind
        </p>

        {/* 🔥 SPECIAL UNDERLINE 1 */}
        <p className={roadRage.className}>
          <UnderlineInput
            width={240}
            maxLength={40}
            inputRef={noteLine1Ref}
            onFilled={() => noteLine2Ref.current?.focus()}
          />
        </p>

        {/* 🔥 SPECIAL UNDERLINE 2 */}
        <p className={roadRage.className}>
          <UnderlineInput
            width={280}
            maxLength={60}
            inputRef={noteLine2Ref}
            onFilled={() => setAllowScroll(true)}
          />
        </p>

        {/* 🔥 BUTTON WITH DESKTOP LOGIC */}
        <div className="m-btn">
          <button
            type="submit"
            onMouseEnter={() => setBtnState("hover")}
            onMouseLeave={() => setBtnState("default")}
            onMouseDown={() => setBtnState("active")}
            onMouseUp={() => setBtnState("hover")}
            onTouchStart={() => setBtnState("active")}
            onTouchEnd={() => setBtnState("default")}
            className="cursor-pointer"
          >
            <Image
              src={getBtnSrc()}
              alt="Send"
              width={160}
              height={50}
              priority
            />
          </button>
        </div>
      </div>
    </section>
  );
}
