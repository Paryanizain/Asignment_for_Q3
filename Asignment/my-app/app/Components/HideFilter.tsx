import Image from "next/image";
import { ChevronDown } from 'lucide-react';
const HideFilter = () => {
    return (
      <div className="bg-white h-[51px] w-full place-items-center">
         <div className="flex w-[1344px] justify-between mt-2">
            <h1 className="text-[24px] font-bold">New (500)</h1>
            <ul className="flex font-medium">
                <li className="flex w-[137.91px] h-[28px] text-[15px] gap-1">Hide Filters<Image
              src="/F5.png"
              alt="TW"
              width={24}
              height={24}
              className="object-contain"
            /></li>
                <li className="flex w-[86.47px] h-[28px] text-[15px] gap-1">Sort By<ChevronDown /></li>
            </ul>
         </div>
      </div>
    );
  };
  export default HideFilter;