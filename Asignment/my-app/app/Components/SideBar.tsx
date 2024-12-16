"use client";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <div className="w-[192px] h-screen text-black bg-white">
        <ul className="mt-4 space-y-1 font-semibold">
          <li className="hover:bg-gray-700 p-1 rounded-md cursor-pointer">
            Shoes
          </li>
          <li className="hover:bg-gray-700 p-1 rounded-md cursor-pointer">
            Sports Bras
          </li>
          <li className="hover:bg-gray-700 p-1 rounded-md cursor-pointer">
            Tops & T-Shirts
          </li>
          <li className="hover:bg-gray-700 p-1 rounded-md cursor-pointer">
            Hoodies & Sweatshirts
          </li>
          <li className="hover:bg-gray-700 p-1 rounded-md cursor-pointer">
            Jackets
          </li>
          <li className="hover:bg-gray-700 p-1 rounded-md cursor-pointer">
            Trousers & Tights
          </li>
          <li className="hover:bg-gray-700 p-1 rounded-md cursor-pointer">
            Shorts
          </li>
          <li className="hover:bg-gray-700 p-1 rounded-md cursor-pointer">
            Tracksuits
          </li>
          <li className="hover:bg-gray-700 p-1 rounded-md cursor-pointer">
            Jumpsuits & Rompers
          </li>
          <li className="hover:bg-gray-700 p-1 rounded-md cursor-pointer">
            Skirts & Dresses
          </li>
          <li className="hover:bg-gray-700 p-1 rounded-md cursor-pointer">
            Socks
          </li>
          <li className="hover:bg-gray-700 p-1 rounded-md cursor-pointer">
            Accessories & Equipment
          </li>
        </ul>
        <div>
          <h1 className="cursor-pointer border-t-2">
            <div
              className="flex items-center justify-between p-2 hover:bg-gray-700 rounded-md"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="font-semibold">Gender</span>
              <span className={`transform ${isOpen ? "rotate-90" : ""}`}>
                <ChevronRight />
              </span>
            </div>
            {isOpen && (
              <div className="mt-2 pl-6 space-y-2 font-medium">
                <div className="cursor-pointer py-2 hover:bg-gray-700 rounded-md">
                Men
                </div>
                <div className="cursor-pointer py-2 hover:bg-gray-700 rounded-md">
                Women
                </div>
                <div className="cursor-pointer py-2 hover:bg-gray-700 rounded-md">
                Unisex
                </div>
              </div>
            )}
          </h1>
        </div>
        <div>
          {" "}
          <h1 className="cursor-pointer border-t-2">
            <div
              className="flex items-center justify-between p-2 hover:bg-gray-700 rounded-md"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="font-semibold">Kid</span>
              <span className={`transform ${isOpen ? "rotate-90" : ""}`}>
                <ChevronRight />
              </span>
            </div>
            {isOpen && (
              <div className="mt-2 pl-6 space-y-2 font-medium">
                <div className="cursor-pointer py-2 hover:bg-gray-700 rounded-md">
                  Boy
                </div>
                <div className="cursor-pointer py-2 hover:bg-gray-700 rounded-md">
                  Girl
                </div>
              </div>
            )}
          </h1>
        </div>
        <div>
          {" "}
          <h1 className="cursor-pointer border-t-2">
            <div
              className="flex items-center justify-between p-2 hover:bg-gray-700 rounded-md"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="font-semibold">Shop By Price</span>
              <span className={`transform ${isOpen ? "rotate-90" : ""}`}>
                <ChevronRight />
              </span>
            </div>
            {isOpen && (
              <div className="mt-2 pl-6 space-y-2 font-medium">
                <div className="cursor-pointer py-2 hover:bg-gray-700 rounded-md">
                Under ₹ 2 500.00
                </div>
                <div className="cursor-pointer py-2 hover:bg-gray-700 rounded-md">
                ₹ 2 501.00 - ₹ 7 500.00
                </div>
              </div>
            )}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
