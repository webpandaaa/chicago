import React from "react";
import { ArrowRight } from "lucide-react";

export default function Second() {
  return (
    <div className="min-h-screen bg-white p-6 md:p-12">
      {/* Curved text banner */}
      <div className="relative mb-16 flex w-full justify-center">
        <img src="../buttons.png" alt="" />
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left column */}
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              Serving Tastiest <br /> Pizza-Pot-Pie and <br /> Grinders in Town
            </h1>
            <p className="max-w-xl text-lg text-gray-600">
              We offer top-notch service along with high-quality food and atmosphere, so you can enjoy a truly memorable
              pizza experience.
            </p>
            <div>
              <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-red-600 px-8 py-3 font-medium text-white transition duration-300 ease-out hover:bg-red-700">
                Order Online
                <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right column with images */}
          <div className="relative">
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl lg:h-[500px]">
              <img
                src="../Second.png"
                alt="People enjoying pizza"
                className="object-cover w-full h-full"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
