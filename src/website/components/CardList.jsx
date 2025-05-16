import React from 'react';
import { FaLaptop, FaDesktop, FaMobileAlt, FaTabletAlt, FaCamera } from 'react-icons/fa';

export default function Cardlist() {
      return (
<div className="flex flex-col sm:flex-row rounded-2xl overflow-hidden shadow-lg">
      {/* Category Sidebar */}
      <div className="w-full sm:w-1/3 bg-white p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4 border-b pb-2">Category</h2>
        <ul className="space-y-4">
          {[ 
            { name: 'Laptops', icon: <FaLaptop />, count: 1 },
            { name: 'PC & Computers', icon: <FaDesktop />, count: 2 },
            { name: 'Cell Phones', icon: <FaMobileAlt />, count: 3 },
            { name: 'Tablets', icon: <FaTabletAlt />, count: 4 },
            { name: 'Cameras', icon: <FaCamera />, count: 5 },
          ].map((cat, idx) => (
            <li key={idx} className="flex items-center justify-between border rounded-lg p-2 hover:shadow">
              <div className="flex items-center space-x-2 text-teal-600">
                <span className="text-lg">{cat.icon}</span>
                <span className="text-sm font-medium text-gray-800">{cat.name}</span>
              </div>
              <span className="text-xs bg-teal-100 text-teal-700 rounded-full px-2 py-0.5">{cat.count}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter Banner */}
      <div className="w-full sm:w-2/3 bg-cover bg-center text-white p-10 flex flex-col justify-center" style={{ backgroundImage: 'url("/your-image-path.jpg")' }}>
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">Don’t miss amazing grocery deals</h2>
        <p className="text-lg mb-6">Sign up for the daily newsletter</p>
        <div className="flex flex-col sm:flex-row items-center sm:space-x-2">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-2 rounded-full border border-white bg-transparent text-white placeholder-white w-full sm:w-2/3 mb-2 sm:mb-0"
          />
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full">Subscribe</button>
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white opacity-50"></div>
        </div>
      </div>
    </div>
  );
}
