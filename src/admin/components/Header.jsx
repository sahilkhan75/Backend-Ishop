import React from "react";
import { FaUserCircle } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center " >
      <h2 className="text-xl font-semibold">Welcome, Admin</h2>
      <div className="flex items-center gap-2">
        <FaUserCircle className="text-2xl text-gray-600" />
        <span className="text-gray-700">Admin</span>
      </div>
    </header>
  );
}
