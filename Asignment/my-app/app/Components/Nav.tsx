import Image from "next/image";
import { Search } from "lucide-react";
import { Heart } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import Link from "next/link";


const Nav = () => {
  return (
    <div className="h-[60px] flex items-center justify-between border px-12">
      <Image
              src="/Vector.png"
              alt="LOGO"
              height={60}
              width={60}
              className="object-cover"
            />
      <ul className="ps-52 gap-8 flex text-sm font-semibold">
        <li> <Link href="/Featured&New" >New & Featured</Link></li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
        <li>Sale</li>
        <li>SNKRS</li>
      </ul>
      <div className="flex items-center gap-4">
      <div className="bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 flex gap-3 p-2">
      <span className="text-xm">
              <Search />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="text-xs px-1 bg-gray-100 w-32"
            />
          </div>
          <div><Heart /></div>
          <div><ShoppingBag /></div>
          </div>
    </div>
  );
};

export default Nav;
