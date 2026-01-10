export default function ServicesCard({ item }) {
  /* ===============================
     NORMALIZE ID
     =============================== */
  const normalizedId = String(item.id).padStart(2, "0");

  /* ===============================
     FONT SIZE CONTROL
     =============================== */
  const baseFontSize = "text-[150px] 2xl:text-[200px]";

  const numberFontSize = {
    "05": "text-[145px] 2xl:text-[195px]",
    "07": "text-[145px] 2xl:text-[185px]",
  };

  const finalFontSize = numberFontSize[normalizedId] || baseFontSize;

  /* ===============================
     SPACING / OPTICAL ADJUSTMENTS
     =============================== */
  const numberSpacing = {
    "05": "mt-1 2xl:mt-0 leading-[1]",
    "06": "mt-8 2xl:mt-14 leading-[1.15]",
    "07": "-mt-20 2xl:-mt-20 leading-[1.05]",
    "08": "mt-8 2xl:mt-12 leading-[1.1]",
  };

  return (
    <div className="team-card flex-shrink-0">
      {/* CARD WRAPPER */}
      <div className="relative w-150 h-screen 2xl:w-162.5 2xl:h-screen flex items-center justify-center">

        {/* CARD BG */}
        <div
          className="absolute z-10 -mt-16 w-140 h-160 2xl:w-151.75 2xl:h-175 bg-no-repeat bg-contain bg-center"
          style={{
            backgroundImage: "url('/assets/hero-section/service-imgs/card-bg-1.svg')",
          }}
        />

        {/* CARD CONTENT */}
        <div className="relative z-20 w-full h-full flex items-center justify-center px-12 py-16">
          <div className="flex flex-col items-center text-center w-full">

            {/* ================= ID ================= */}
            <div className="h-32 2xl:h-40 flex items-baseline justify-center">
              <h2
                className={`
                  ${finalFontSize}
                  leading-none
                  mt-5 2xl:mt-7
                  ${numberSpacing[normalizedId] || ""}
                `}
                style={{ lineHeight: "1.3" }}
              >
                {normalizedId}
              </h2>
            </div>

            {/* ================= TITLE ================= */}
            <div className="h-28 2xl:h-32 flex items-center justify-center mt-20 2xl:mt-28 px-20">
              <h2 className="text-[48px] 2xl:text-[56px] font-medium leading-13 whitespace-pre-line">
                {item.title}
              </h2>
            </div>

            {/* ================= DESCRIPTION ================= */}
            <div className="h-48 2xl:h-48 flex items-start justify-center mt-4 overflow-hidden px-20">
              <p className="text-[15px] 2xl:text-[16px] font-light text-black leading-relaxed">
                {item.desc}
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
