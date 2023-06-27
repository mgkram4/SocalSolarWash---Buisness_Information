import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-slate-400">
        <h1 className="text-3xl font-bold text-white text-shadow-sm">
          Expertise ain Solar Panel Cleaning
        </h1>
      </div>
      <div className="flex justify-center items-center min-h-screen bg-slate-600">
        <h1 className="text-3xl font-bold text-white text-shadow-sm">
          Our Pricing
        </h1>
      </div>
      <div className="flex justify-center items-center min-h-screen bg-slate-400">
        <h1 className="text-3xl font-bold text-white text-shadow-sm">
          Lets connect
        </h1>
      </div>
    </div>
  );
}
