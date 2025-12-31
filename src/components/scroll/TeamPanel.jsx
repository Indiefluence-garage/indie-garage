import teamData from "@/data/teamData";
import TeamCard from "@/components/scroll/TeamCard";


export default function TeamPanel() {
  return (
    <section className="relative w-screen min-h-screen overflow-visible">

      {/* TRACK */}
      <div className="relative flex w-max">

        {/* BACKGROUND */}
        <div
          className="absolute top-0 left-0 h-full w-full"
          style={{
            backgroundImage: "url('/assets/hero-section/team-bg-1.png')",
            backgroundRepeat: "repeat-x",
            backgroundSize: "auto 100%",
            backgroundPosition: "left center",
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 flex gap-0 px-0">
          {teamData.map((item) => (
            <TeamCard key={item.id} item={item} />
          ))}
        </div>

      </div>
    </section>
  );
}



