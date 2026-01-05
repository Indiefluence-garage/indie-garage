export default function TeamCard({ item }) {
  return (
    <div className="team-card flex-shrink-0">
      
      {/* CARD WRAPPER */}
      <div className="relative w-150 h-screen 2xl:w-162.5 2xl:h-screen flex items-center justify-center">

        {/* CARD BG */}
        <div
          className="absolute z-10 -mt-16 w-140 h-160 2xl:w-151.75 2xl:h-175 bg-no-repeat bg-contain bg-center"
          style={{
            backgroundImage: "url('/assets/hero-section/card-bg-1.svg')",
          }}
        />

        {/* CARD CONTENT */}
        <div className="relative z-20 flex flex-col items-center text-center px-32 pt-0">

          <h2 className="text-[150px] 2xl:text-[200px] font-cormorant leading-none">
            {item.id}
          </h2>

          <h2 className="text-[54px] 2xl:text-[64px] font-semibold mt-2">
            {item.title}
          </h2>

          <p className="text-[17px] 2xl:text-[18px] font-light text-black mt-4">
            {item.desc}
          </p>

        </div>
      </div>
    </div>
  );
}
