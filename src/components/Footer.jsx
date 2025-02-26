import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white px-4 py-8 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12">
          {/* Logo and Contact Section */}
          <div className="lg:col-span-3">
            <img
              src="../logo.png"
              alt="Chicago Pizza and oven grinder co."
              width={200}
              height={60}
              className="mb-6"
            />
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900">ADDRESS</h3>
                <p className="mt-2 text-gray-600">
                  2121 North Clark Street,
                  <br />
                  Chicago, IL 60614
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">PHONE NUMBER</h3>
                <p className="mt-2 text-gray-600">773-248-2570</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">INSTALL OUR APP</h3>
                <div className="mt-3 flex gap-4">
                  <a href="#" className="block w-32">
                    <img
                      src="../google.png"
                      alt="Get it on Google Play"
                      width={120}
                      height={40}
                      className="h-10 rounded"
                    />
                  </a>
                  <a href="#" className="block w-32">
                    <img
                      src="../App.png"
                      alt="Download on the App Store"
                      width={120}
                      height={40}
                      className="h-10 rounded"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Links Section */}
          <div className="grid grid-cols-1 gap-8 md:col-span-1 md:grid-cols-2 lg:col-span-9 lg:grid-cols-4">
            <div>
              <h3 className="font-semibold text-gray-900">MENU</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Pizza Pot Pie</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Oven Grinders</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Salad Dinners</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">ABOUT</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Our Story</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Party Room</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">ORDER</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Gift Cards</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Order Online</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Delivery & Pickup</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Reservation</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">OPENING HOURS</h3>
              <ul className="mt-4 space-y-2">
                <li className="text-gray-600">• Monday - Thursday : 4PM - 10PM</li>
                <li className="text-gray-600">• Friday : 4PM - 11PM</li>
                <li className="text-gray-600">• Saturday: 11AM - 11PM</li>
                <li className="text-gray-600">• Sunday : 11AM - 10PM</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 flex flex-col items-center justify-between border-t border-gray-200 pt-8 md:flex-row">
          <p className="text-sm text-gray-600">© 2022 Chicago Pizza and oven grinder co. All Rights Reserved</p>
          <div className="mt-4 flex space-x-4 md:mt-0">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms Of Service</a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
