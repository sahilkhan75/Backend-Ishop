import React from "react";
import { FaChartLine, FaThLarge, FaLayerGroup, FaUser, FaFileAlt, FaProductHunt, FaCube, FaCogs } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <aside className="w-full h-dvh bg-[#1F1F2E] text-white p-6">
      <h1 className="text-2xl font-bold text-white mb-10">
        ISHOP <span className="text-yellow-400">ADMIN</span>
      </h1>

      <div className="mb-6">
        <h2 className="text-gray-400 text-xs mb-2">MENU</h2>
        <div className="space-y-4">
           <Link to="/admin">
          <div className="flex items-center gap-3 cursor-pointer hover:text-yellow-400">
            <FaChartLine /> <span>Dashboards</span>
          </div>
           </Link>
          <div className="flex items-center gap-3 cursor-pointer hover:text-yellow-400">
            <FaThLarge /> <span>Apps</span>
          </div>
          <div className="flex items-center gap-3 cursor-pointer hover:text-yellow-400 relative">
            <FaLayerGroup /> <span>Layouts</span>
            <span className="absolute right-0 bg-red-600 text-xs px-2 py-0.5 rounded-full text-white ml-auto">Hot</span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-gray-400 text-xs mb-2">PAGES</h2>
        <div className="space-y-4">
            <Link to="/admin/category">
          <div className="flex items-center gap-3 cursor-pointer hover:text-yellow-400">
            <FaUser /> <span>Category</span>
          </div>
            </Link>
            <Link to={ "/admin/color" }>
          <div className="flex items-center gap-3 cursor-pointer hover:text-yellow-400">
            <FaFileAlt /> <span>Color</span>
          </div>
            </Link>
           <Link to={"/admin/product"}>
          <div className="flex items-center gap-3 cursor-pointer hover:text-yellow-400">
            <FaProductHunt /> <span>Product</span>
          </div>
           </Link>
        </div>
      </div>

      <div>
        <h2 className="text-gray-400 text-xs mb-2">COMPONENTS</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-3 cursor-pointer hover:text-yellow-400">
            <FaCube /> <span>Base UI</span>
          </div>
          <div className="flex items-center gap-3 cursor-pointer hover:text-yellow-400">
            <FaCogs /> <span>Advance UI</span>
          </div>
        </div>
      </div>
        <div className="flex items-center gap-3 text-gray-500 hover:text-red-600 cursor-pointer">
          <span className="font-medium">🚪 Logout</span>
        </div>
    </aside>
  );
}

