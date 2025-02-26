import React from "react";
import { Star, Clock, Check } from "lucide-react";
import { MessageCircle } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-white p-5">
      {/* Header */}
      <header className="container mx-auto md:px-12  py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="../logo.png"
            alt="Chicago Pizza Logo"
            width={150}
            height={50}
            className="object-contain"
          />
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {["MENU", "PARTY ROOM", "RESERVATION", "ABOUT", "CONTACT"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="text-gray-600 hover:text-gray-900 pb-1 border-b-2 border-transparent hover:border-black transition duration-200"
              >
                {item}
              </a>
            )
          )}
        </nav>

        <button className="rounded-full cursor-pointer border border-primary px-4 py-2 hover:bg-primary/5">
          Install APP
        </button>
      </header>

      {/* Main Content */}
      <main className=" h-100vh p-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div className="space-y-6 text-center md:text-left md:pl-22">
            {/* Reviews */}
            <div className="flex justify-center md:justify-start items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
              </div>
              <div className="items-center gap-1">
                <span className="text-sm font-medium">REVIEWS</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              World Famous
              <br />
              Pizza in Chicago
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg">
              We serve famous pizza-pot-pies and grinders out of a cozy <br />
              brownstone in the Lincoln Park neighborhood.
            </p>

            {/* CTA Button */}
            <button className="cursor-pointer rounded-full bg-red-600 hover:bg-red-700 text-white px-6 py-4">
              Order Online →
            </button>
          </div>

          {/* Right Column */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-2xl">
              <img
                src="../herosection.png"
                alt="Person enjoying pizza"
                className="w-full h-auto max-w-none scale-90"
              />
            </div>
          </div>

          <button className="fixed bottom-6 right-6 bg-yellow-500 p-3 rounded-full shadow-lg flex items-center justify-center w-14 h-14">
            <MessageCircle className="w-8 h-8 text-white" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
