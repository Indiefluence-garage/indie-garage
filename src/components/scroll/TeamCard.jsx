export default function TeamCard({ item }) {
  return (
    <div className="team-card flex-shrink-0">
      <div
        className="relative w-[600px] h-[750px] 2xl:h-[800px] flex flex-col items-center justify-center text-center px-28"
        style={{
          backgroundImage: "url('/assets/hero-section/team-card-bg.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <h2 className="text-[150px] 2xl:text-[200px] font-cormorant leading-none mt-20">
          {item.id}
        </h2>

        <h3 className="text-[48px] 2xl:text-[64px] font-medium">
          {item.title}
        </h3>

        <p className="text-sm text-[16px] 2xl:text-[20px] font-light text-black">
          {item.desc}
        </p>
      </div>
    </div>
  );
}
