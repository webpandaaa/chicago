import React from "react";

const Third = () => {
  return (
    <div className="max-w-7xl md:h-[160vh] h-[190vh] mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-8 w-full">
        <div className="flex flex-col items-center justify-center w-[100%]">
          <h1 className="text-3xl font-bold">Rich in Flavour, and History</h1>
          <p className="text-gray-600 mt-2 w-[60%] mb-6">
            Our pies are made with the finest ingredients and cooked to
            perfection in our signature brick oven, while our grinders are
            packed with fresh, delicious ingredients.
          </p>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid  grid-cols-2 md:grid-cols-3 gap-4 w-full mx-auto">
        <img
          src="../one.png"
          alt="Man eating pizza"
          className="rounded-lg object-cover md:w-full md:h-140 w-half h-72"
        />
        <img
          src="../two.png"
          alt="Pepperoni pizza"
          className="rounded-lg object-cover md:w-full md:h-72 w-half h-72"
        />
        <img
          src="../three.png"
          alt="Woman enjoying pizza"
          className="rounded-lg object-cover md:w-full md:h-140 w-half h-72"
        />
        <img
          src="../Four.png"
          alt="Hands sharing pizza"
          className="rounded-lg object-cover md:w-full md:h-72 w-half h-72"
        />
        <img
          src="../Five.png"
          alt="Making dough"
          className="rounded-lg object-cover md:w-full md:h-140 w-half h-72 grayscale md:mt-[-37vh]"
        />
        <img
          src="../Six.png"
          alt="Pizza signboard"
          className="rounded-lg object-cover md:w-full md:h-72 w-half h-72"
        />
      </div>
    </div>
  );
};

export default Third;
