"use client";
import Image from "next/image";
import { Tally1 } from "lucide-react";

const Topnav = () => {
  return (
    <div className="bg-[#F5F5F5] h-[36px] border flex items-center justify-between px-12">
      <Image
              src="/Vector2.png"
              alt="LOGO"
              height={20}
              width={20}
              className="object-cover"
            />
      <ul className="flex text-[11px] p-3 gap-x-3 items-center font-semibold">
        <li>Find a Store</li> <Tally1 />
        <li>Help</li> <Tally1 />
        <li>Join Us</li> <Tally1 />
        <li>Sign In</li>
      </ul>
    </div>
  );
};

export default Topnav;
