import React from "react";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";

const Featuredproducts2 = (props: any) => {
  return (
    <div className="w-[1344px] h-[561px] mt-20">
      <h1 className="text-[23px] font-bold mb-4">Gear Up</h1>
      <div className="w-[1356px] h-[509px] flex">
        <div className="w-[666px] flex-row place-items-end ">
          <div className="flex place-items-center gap-2 mx-8">
            <h1 className="text-[15px] font-semibold">Shop Men's</h1>
            <button className="bg-[#F5F5F5] text-xs rounded-full w-8 h-8 place-items-center">
              <ChevronLeft />
            </button>
            <button className="rounded-full text-xs bg-[#E5E5E5] w-8 h-8 place-items-center">
              <ChevronRight />
            </button>
          </div>
          <div className="h-[447px] w-[666px] justify-end flex space-x-2 pt-3">
            <div className="h-[393px] w-[300px] space-y-1">
              <img src={props.img} alt={props.img} />
              <div className="flex justify-between pt-3">
                <h3 className="text-[15px] font-semibold">{props.pro}</h3>
                <h3 className="text-[15px] font-semibold">{props.rs}</h3>
              </div>
              <p className="text-[#757575] w-[200px] text-[16px]">
                Men's Short-Sleeve Running Top
              </p>
            </div>
            <div className="h-[393px] w-[300px] space-y-1">
              <img src={props.img2} alt={props.img2} />
              <div className="flex justify-between pt-3">
                <h3 className="text-[15px] font-semibold">{props.pro2}</h3>
                <h3 className="text-[15px] font-semibold">{props.rs2}</h3>
              </div>
              <p className="text-[#757575] w-[200px] text-[16px]">
                Men's 18cm (approx.) 2-in-1 Versatile Shorts{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="w-[666px] flex-row place-items-end ">
          <div className="flex place-items-center gap-2 mx-8">
            <h1 className="text-[15px] font-semibold">Shop Women's</h1>
            <button className="bg-[#F5F5F5] text-xs rounded-full w-8 h-8 place-items-center">
              <ChevronLeft />
            </button>
            <button className="rounded-full text-xs bg-[#E5E5E5] w-8 h-8 place-items-center">
              <ChevronRight />
            </button>
          </div>
          <div className="h-[447px] w-[666px] justify-end flex space-x-2 pt-3">
            <div className="h-[393px] w-[300px] space-y-1">
              <img src={props.img3} alt={props.img3} />
              <div className="flex justify-between pt-3">
                <h3 className="text-[15px] font-semibold">{props.pro3}</h3>
                <h3 className="text-[15px] font-semibold">{props.rs3}</h3>
              </div>
              <p className="text-[#757575] w-[200px] text-[16px]">
              Women's Long-Sleeve Running Top
              </p>
            </div>
            <div className="h-[393px] w-[300px] space-y-1">
              <img src={props.img4} alt={props.img4} />
              <div className="flex justify-between pt-3">
                <h3 className="text-[15px] font-semibold">{props.pro4}</h3>
                <h3 className="text-[15px] font-semibold">{props.rs4}</h3>
              </div>
              <p className="text-[#757575] w-[250px] text-[16px]">
              Women's Mid-Rise 7/8 Running Leggings with Pockets
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featuredproducts2;
