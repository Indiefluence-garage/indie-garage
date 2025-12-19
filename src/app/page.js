import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen ">
    <div className="flex items-center justify-center border border-dashed border-zinc-500 w-[500px] mx-auto p-4 ">
     <p className="text-6xl text-zinc-400 font-bold tracking-widest">Hello, Next.js!</p>
    </div>
    </div>
  );
}
