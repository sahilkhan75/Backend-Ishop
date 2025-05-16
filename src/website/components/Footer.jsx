import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube, FaPinterestP } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white text-sm text-gray-800 pt-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4">SWOO - 1ST NYC TECH ONLINE MARKET</h3>
            <p className="text-xs mb-2">HOTLINE 24/7</p>
            <p className="text-lg text-red-500 font-bold mb-2">(025) 3686 25 16</p>
            <p className="text-sm mb-1">257 Thatcher Road St, Brooklyn, Manhattan, NY 10092</p>
            <p className="text-sm mb-4">contact@swootechmart.com</p>
            <div className="flex space-x-3 mb-4">
              <FaTwitter className="w-5 h-5 text-gray-700 bg-gray-100 p-1 rounded-full" />
              <FaFacebookF className="w-5 h-5 text-gray-700 bg-gray-100 p-1 rounded-full" />
              <FaInstagram className="w-5 h-5 text-gray-700 bg-gray-100 p-1 rounded-full" />
              <FaYoutube className="w-5 h-5 text-gray-700 bg-gray-100 p-1 rounded-full" />
              <FaPinterestP className="w-5 h-5 text-gray-700 bg-gray-100 p-1 rounded-full" />
            </div>
            <div className="flex space-x-2">
              <select className="border rounded px-2 py-1 text-sm">
                <option>USD</option>
                <option>EUR</option>
              </select>
              <div  className='flex border rounded items-center ' >
              <span><img src="./Button → eng.png.svg" alt="" /></span>
              <select className=" py-1 text-sm">

                <option>  Eng</option>
                <option>Esp</option>
              </select>
              </div>
            </div>
          </div>

          {/* Top Categories */}
          <div>
            <h3 className="font-bold mb-4">TOP CATEGORIES</h3>
            <ul className="space-y-1 text-sm">
              {['Laptops', 'PC & Computers', 'Cell Phones', 'Tablets', 'Gaming & VR', 'Networks', 'Cameras', 'Sounds', 'Office'].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4">COMPANY</h3>
            <ul className="space-y-1 text-sm">
              {['About Swoo', 'Contact', 'Career', 'Blog', 'Sitemap', 'Store Locations'].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Help Center */}
          <div>
            <h3 className="font-bold mb-4">HELP CENTER</h3>
            <ul className="space-y-1 text-sm">
              {['Customer Service', 'Policy', 'Terms & Conditions', 'Trach Order', 'FAQs', 'My Account', 'Product Support'].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Partner */}
          <div>
            <h3 className="font-bold mb-4">PARTNER</h3>
            <ul className="space-y-1 text-sm">
              {['Become Seller', 'Affiliate', 'Advertise', 'Partnership'].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Subscription */}
        <div className="mt-10 border-t pt-8">
          <h4 className="font-bold text-sm mb-2">SUBSCRIBE & GET <span className="text-red-500">10% OFF</span> FOR YOUR FIRST ORDER</h4>
          <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
            <input type="email" placeholder="Enter your email address" className="w-full sm:w-1/2 px-4 py-2 border rounded mb-2 sm:mb-0" />
            <button className="text-red-500 font-semibold text-sm">SUBSCRIBE</button>
          </div>
          <p className="text-xs text-gray-500 mt-2">By subscribing, you’re accepted the our <span className="underline cursor-pointer">Policy</span></p>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t pt-4 text-xs text-gray-500 flex flex-col sm:flex-row justify-between items-center">
          <p>
            © 2024 <span className="font-semibold text-black">Shawonetc3</span>. All Rights Reserved
          </p>
          <div className="flex space-x-3 items-center my-2 sm:my-0">
            <img src="./pay1.svg" alt="paypal" className="h-5" />
            <img src="./pay2.svg" alt="visa" className="h-5" />
            <img src="./pay3.svg" alt="stripe" className="h-5" />
            <img src="./pay4.svg" alt="klarna" className="h-5" />
            <img src="./pay5.svg" alt="klarna" className="h-5" />
          </div>
          <a href="#" className="text-blue-500">Mobile Site</a>
        </div>
      </div>
    </footer>
  );
}
