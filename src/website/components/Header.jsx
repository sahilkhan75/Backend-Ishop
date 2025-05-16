import React from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

export default function Header() {
  return (
    <div className="bg-white text-sm">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 py-2 bg-gray-50 border-b space-y-2 sm:space-y-0">
        <div className="flex items-center space-x-2">
          <span className="text-gray-500">Hotline 24/7</span>
          <strong>(025) 3886 25 16</strong>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-black">Sell on Swoo</a>
          <a href="#" className="text-gray-600 hover:text-black">Order Tracki</a>
          <select className="text-gray-600 border-none focus:ring-0">
            <option>USD</option>
            <option>EUR</option>
          </select> 
          <div  className='flex  items-center ' >
              <span><img src="./Button → eng.png.svg" alt="" /></span>
              <select className=" py-1 text-sm">
                <option>  Eng</option>
                <option>Esp</option>
              </select>
              </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="flex flex-col lg:flex-row justify-between items-center px-4 sm:px-6 py-4 space-y-4 lg:space-y-0">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-teal-600 rounded-full"></div>
          <div>
            <div className="font-semibold text-sm">SWOO</div>
            <div className="text-xs text-gray-500">TECH MART</div>
          </div>
        </div>

        <nav className="flex flex-wrap justify-center lg:justify-start space-x-4 sm:space-x-6 text-sm font-medium">
          <div className="flex items-center cursor-pointer">HOMES <FiChevronDown className="ml-1" /></div>
          <div className="flex items-center cursor-pointer">PAGES <FiChevronDown className="ml-1" /></div>
          <div className="flex items-center cursor-pointer">PRODUCTS <FiChevronDown className="ml-1" /></div>
          <a href="#" className="cursor-pointer">CONTACT</a>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="text-xs text-gray-500">WELCOME</div>
          <a href="#" className="text-sm font-bold">LOG IN / REGISTER</a>
          <div className="relative">
            <FaShoppingCart className="w-6 h-6 text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-teal-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">5</span>
          </div>
          <div className="text-sm font-bold">$1,689.00</div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-teal-600 text-white px-4 sm:px-6 py-4 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex items-center bg-white rounded w-full md:w-1/2 overflow-hidden">
          <button className="px-4 text-gray-700 flex items-center space-x-1">
            <span>All Categories</span>
            <FiChevronDown />
          </button>
          <input
            type="text"
            placeholder="Search anything..."
            className="flex-grow px-4 py-2 outline-none text-black"
          />
          <button className="px-4 text-black">
            <FaSearch className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 flex flex-col md:flex-row justify-around text-center text-sm space-y-2 md:space-y-0">
          <span>FREE SHIPPING OVER $199</span>
          <span>30 DAYS MONEY BACK</span>
          <span>100% SECURE PAYMENT</span>
        </div>
      </div>
    </div>
  );
}
