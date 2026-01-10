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
  value,
  onChange,
}) => {
  const handleChange = (e) => {
    const val = e.target.value;
    onChange?.(val);

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

  /* 🔥 FORM VALUES */
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    location: "",
    website: "",
    help: "",
    note1: "",
    note2: "",
  });

  const getBtnSrc = () => {
    if (btnState === "active")
      return "/assets/contact/contact-form-btn-onclick.svg";
    if (btnState === "hover")
      return "/assets/contact/contact-form-btn-hover.svg";
    return "/assets/contact/contact-form-btn-1.svg";
  };

  /* 🔥 HANDLE FORM SUBMIT */
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Reset all form values
    setFormValues({
      name: "",
      email: "",
      location: "",
      website: "",
      help: "",
      note1: "",
      note2: "",
    });
    
    // Reset scroll state
    setAllowScroll(false);
    
    // Optional: Show success message or feedback
    console.log("Form submitted and reset!");
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
    <section className="m-contact" id="contact">
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
          My name is{" "}
          <UnderlineInput
            width={90}
            value={formValues.name}
            onChange={(val) => setFormValues({ ...formValues, name: val })}
          />{" "}
          and you can reach me at{" "}
          <UnderlineInput
            width={150}
            value={formValues.email}
            onChange={(val) => setFormValues({ ...formValues, email: val })}
          />
          .
        </p>

        <p className={roadRage.className}>
          I'm writing from{" "}
          <UnderlineInput
            width={120}
            value={formValues.location}
            onChange={(val) => setFormValues({ ...formValues, location: val })}
          />{" "}
          and would love to work together.
        </p>

        <p className={roadRage.className}>
          Our website is{" "}
          <UnderlineInput
            width={160}
            value={formValues.website}
            onChange={(val) => setFormValues({ ...formValues, website: val })}
          />{" "}
          or we're starting fresh.
        </p>

        <p className={roadRage.className}>
          We're looking for help with{" "}
          <UnderlineInput
            width={200}
            value={formValues.help}
            onChange={(val) => setFormValues({ ...formValues, help: val })}
          />
          . Here's a quick note about what we have in mind
        </p>

        {/* 🔥 SPECIAL UNDERLINE 1 */}
        <p className={roadRage.className}>
          <UnderlineInput
            width={240}
            maxLength={40}
            inputRef={noteLine1Ref}
            value={formValues.note1}
            onChange={(val) => setFormValues({ ...formValues, note1: val })}
            onFilled={() => noteLine2Ref.current?.focus()}
          />
        </p>

        {/* 🔥 SPECIAL UNDERLINE 2 */}
        <p className={roadRage.className}>
          <UnderlineInput
            width={280}
            maxLength={60}
            inputRef={noteLine2Ref}
            value={formValues.note2}
            onChange={(val) => setFormValues({ ...formValues, note2: val })}
            onFilled={() => setAllowScroll(true)}
          />
        </p>

        {/* 🔥 BUTTON WITH DESKTOP LOGIC */}
        <div className="m-btn">
          <button
            type="submit"
            onClick={handleSubmit}
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