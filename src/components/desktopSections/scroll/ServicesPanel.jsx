import teamData from "@/data/teamData";
import ServicesCard from "@/components/desktopSections/scroll/ServicesCard";


export default function ServicesPanel() {
  return (
    <section className="relative w-screen min-h-screen overflow-visible " id="services">

      {/* TRACK */}
      <div className="relative flex w-max">

        {/* BACKGROUND */}
        <div
          className="absolute top-0 left-0 h-full w-full"
          style={{
            backgroundImage: "url('/assets/hero-section/service-imgs/team-bg-1.webp')",
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 100%",
            backgroundPosition: "left center",
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 flex gap-0 px-0">
          {teamData.map((item) => (
            <ServicesCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}



