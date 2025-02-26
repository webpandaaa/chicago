import React from "react";
import { Dot } from "lucide-react";
import "../index.css";

export default function Four() {
  return (
    <div className=" h-[90vh] flex items-center justify-center flex-col">
      <div className="px-4 max-w-7xl">
        <div className="grid grid-cols-1 h-[60vh] bg-[#D19F49]  md:grid-cols-2  overflow-hidden rounded-lg">
          {/* Left Section */}
          <div className="bg-[#D19F49] pl-10 pt-20 rounded-lg text-white">
            <h2 className="text-4xl font-bold">Dining Hours</h2>
            <p className="mt-6 w-[30vw]">
              Stop by today and see for yourself what makes{" "}
              <span className="font-bold">
                Chicago Pizza Oven and Grinder Co.
              </span>{" "}
              the best place for pizza in town!
            </p>
            <button className="relative mt-8 cursor-pointer bg-gradient-to-r from-[#c47c19] to-[#533609] text-white px-6 py-3 text-lg font-medium rounded-full shadow-lg hover:scale-105 transition duration-300">
              Make a Reservation
            </button>
          </div>

          {/* Right Section */}
          <div>
            <img src="../Seven.png" alt="People enjoying pizza" className="" />
          </div>
        </div>
      </div>

      {/* Dining Schedule */}
      <div className="mt-12 w-full bg-black text-white text-center py-4 overflow-hidden">
        <div className="marquee flex space-x-6 text-lg font-semibold">
          <div className="marquee-content flex space-x-6">
            <span className="opacity-50 flex">
              <Dot /> MON
            </span>
            <span className="opacity-50 flex">
              <Dot /> TUES
            </span>
            <span className="opacity-50 flex">
              <Dot /> WED
            </span>
            <span className="opacity-50 flex">
              <Dot /> THUR
            </span>
            <span className="opacity-50 flex">
              <Dot /> THUR : 4PM-10PM
            </span>
            <span className="opacity-50 flex">
               --- FRI : 4PM-11PM  ---
            </span>
            <span className="opacity-50 flex">
              <Dot /> SAT : 11AM-11PM
            </span>
          </div>
          <div className="marquee-content flex space-x-6">
            <span className="opacity-50 flex">
              <Dot /> MON
            </span>
            <span className="opacity-50 flex">
              <Dot /> TUES
            </span>
            <span className="opacity-50 flex">
              <Dot /> WED
            </span>
            <span className="opacity-50 flex">
              <Dot /> THUR
            </span>
            <span className="opacity-50 flex">
              <Dot /> THUR : 4PM-10PM
            </span>
            <span className="opacity-50 flex">
               --- FRI : 4PM-11PM  ---
            </span>
            <span className="opacity-50 flex">
              <Dot /> SAT : 11AM-11PM
            </span>
          </div>
          <div className="marquee-content flex space-x-6">
            <span className="opacity-50 flex">
              <Dot /> MON
            </span>
            <span className="opacity-50 flex">
              <Dot /> TUES
            </span>
            <span className="opacity-50 flex">
              <Dot /> WED
            </span>
            <span className="opacity-50 flex">
              <Dot /> THUR
            </span>
            <span className="opacity-50 flex">
              <Dot /> THUR : 4PM-10PM
            </span>
            <span className="opacity-50 flex">
               --- FRI : 4PM-11PM  ---
            </span>
            <span className="opacity-50 flex">
              <Dot /> SAT : 11AM-11PM
            </span>
          </div>
          <div className="marquee-content flex space-x-6">
            <span className="opacity-50 flex">
              <Dot /> MON
            </span>
            <span className="opacity-50 flex">
              <Dot /> TUES
            </span>
            <span className="opacity-50 flex">
              <Dot /> WED
            </span>
            <span className="opacity-50 flex">
              <Dot /> THUR
            </span>
            <span className="opacity-50 flex">
              <Dot /> THUR : 4PM-10PM
            </span>
            <span className="opacity-50 flex">
               --- FRI : 4PM-11PM  ---
            </span>
            <span className="opacity-50 flex">
              <Dot /> SAT : 11AM-11PM
            </span>
          </div>
          <div className="marquee-content flex space-x-6">
            <span className="opacity-50 flex">
              <Dot /> MON
            </span>
            <span className="opacity-50 flex">
              <Dot /> TUES
            </span>
            <span className="opacity-50 flex">
              <Dot /> WED
            </span>
            <span className="opacity-50 flex">
              <Dot /> THUR
            </span>
            <span className="opacity-50 flex">
              <Dot /> THUR : 4PM-10PM
            </span>
            <span className="opacity-50 flex">
               --- FRI : 4PM-11PM  ---
            </span>
            <span className="opacity-50 flex">
              <Dot /> SAT : 11AM-11PM
            </span>
          </div>
          
        </div>
      </div>
    </div>
  );
}
