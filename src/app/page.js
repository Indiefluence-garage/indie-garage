import DesktopHome from "@/components/home/DesktopHome";
import MobileHome from "@/components/home/MobileHome";

export default function Page() {
  return (
    <>
      {/* MOBILE */}
      <div className="block md:hidden">
        <MobileHome />
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:block">
        <DesktopHome />
      </div>
    </>
  );
}
