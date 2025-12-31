import Image from "next/image";

const TestimonialCard = ({ item }) => {
  return (
    <div className="relative w-[735px]  h-[735px] flex-shrink-0">
      {/* CARD BACKGROUND */}
      <Image
        src="/assets/testimonial/testi-card-bg.svg"
        alt="testimonial card"
        fill
        className="object-contain"
        priority
      />

      {/* CARD CONTENT */}
      <div className="absolute inset-0 px-[200px] flex flex-col justify-center text-left">
        <p className="text-[17px] font-light leading-relaxed text-black mb-6">
          {item.text}
        </p>

        <p className="font-semibold text-gray-900 mb-0 text-[17px]">
          {item.name}
        </p>

        <p className="text-[14px] font-light text-gray-600">
          {item.company}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
