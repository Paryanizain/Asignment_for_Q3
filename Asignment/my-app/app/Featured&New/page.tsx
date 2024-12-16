import Image from "next/image";
import React from "react";
import HideFilter from "../Components/HideFilter";
import Sidebar from "../Components/SideBar";
import Related from "../Components/Related";

const FeaturedNew = () => {
  const carsName = [
    {
      proname: "Nike Air Force 1 Mid '07",
      proprice: "MRP : ₹ 10 795.00",
      inorout: "Just In",
      prodiscrip: "Men's Shoes",
      image: "/r1.png",
    },
    {
      proname: "Nike Court Vision Low Next Nature",
      proprice: "MRP : ₹ 4 995.00",
      inorout: "Just In",
      prodiscrip: "Men's Shoes",
      image: "/r2.png",
    },
    {
      proname: "Nike Air Force 1 PLT.AF.ORM",
      proprice: "MRP : ₹ 8 695.00",
      inorout: "Just In",
      prodiscrip: "Women's Shoes",
      image: "/r3.png",
    },
    {
      proname: "Nike Air Force 1 React",
      proprice: "MRP : ₹ 13 295.00",
      inorout: "Just In",
      prodiscrip: "Men's Shoes",
      image: "/r4.png",
    },
    {
      proname: "Air Jordan 1 Elevate Low",
      proprice: "MRP : ₹ 11 895.00",
      inorout: "Promo Exclusion",
      prodiscrip: "Women's Shoes",
      image: "/r5.png",
    },
    {
      proname: "Nike Standard Issue",
      proprice: "MRP : ₹ 2 895.00",
      inorout: "Just In",
      prodiscrip: "Women's Basketball Jersey",
      image: "/r6.png",
    },
    {
      proname: "Nike Dunk Low Retro SE",
      proprice: "MRP : ₹ 9 695.00",
      inorout: "Promo Exclusion",
      prodiscrip: "Men's Shoes",
      image: "/r7.png",
    },
    {
      proname: "Nike Dri-FIT UV Hyverse",
      proprice: "MRP : ₹ 2 495.00",
      inorout: "Sustainable Materials",
      prodiscrip: "Men's Short-Sleeve Graphic Fitness Top",
      image: "/r8.png",
    },
    {
      proname: "Nike Court Vision Low",
      proprice: "MRP : ₹ 5 695.00",
      inorout: "Just In",
      prodiscrip: "Men's Shoes",
      image: "/r9.png",
    },
    {
      proname: "Nike Dri-FIT Ready",
      proprice: "MRP : ₹ 2 495.00",
      inorout: "Just In",
      prodiscrip: "Men's Short-Sleeve Fitness Top",
      image: "/r10.png",
    },
    {
      proname: "Nike One Leak Protection: Period",
      proprice: "MRP : ₹ 3 395.00",
      inorout: "Just In",
      prodiscrip: "Women's Mid-Rise 18cm (approx.) Biker Shorts",
      image: "/r11.png",
    },
    {
      proname: "Nike Air Force 1 LV8 3",
      proprice: "MRP : ₹ 7 495.00",
      inorout: "Just In",
      prodiscrip: "Older Kids' Shoe",
      image: "/r12.png",
    },
    {
      proname: "Nike Blazer Low Platform",
      proprice: "MRP : ₹ 8 195.00",
      inorout: "Just In",
      prodiscrip: "Women's Shoes",
      image: "/r13.png",
    },
    {
      proname: "Nike Air Force 1 '07",
      proprice: "MRP : ₹ 8 195.00",
      inorout: "Just In",
      prodiscrip: "Women's Shoes",
      image: "/r14.png",
    },
    {
      proname: "Nike Pro Dri-FIT",
      proprice: "MRP : ₹ 1 495.00",
      inorout: "Just In",
      prodiscrip: "Men's Tight-Fit Sleeveless Top",
      image: "/r15.png",
    },
    {
      proname: "Nike Air Max Pulse",
      proprice: "₹ 13 995",
      inorout: "Just In",
      prodiscrip: "Women's Shoes",
      image: "/r16.png",
    },
    {
      proname: "Nike Air Max Pulse",
      proprice: "₹ 13 995",
      inorout: "Just In",
      prodiscrip: "Women's Shoes",
      image: "/r17.png",
    },
    {
      proname: "Nike Air Max Pulse",
      proprice: "₹ 13 995",
      inorout: "Just In",
      prodiscrip: "Women's Shoes",
      image: "/r18.png",
    },
    {
      proname: "Nike Air Max Pulse",
      proprice: "₹ 13 995",
      inorout: "Just In",
      prodiscrip: "Women's Shoes",
      image: "/r19.png",
    },
    {
      proname: "Nike Air Max Pulse",
      proprice: "₹ 13 995",
      inorout: "Just In",
      prodiscrip: "Women's Shoes",
      image: "/r20.png",
    },
    {
      proname: "Nike Air Max Pulse",
      proprice: "₹ 13 995",
      inorout: "Just In",
      prodiscrip: "Women's Shoes",
      image: "/r21.png",
    },
    {
      proname: "Nike Air Max Pulse",
      proprice: "₹ 13 995",
      inorout: "Just In",
      prodiscrip: "Women's Shoes",
      image: "/r22.png",
    },
    {
      proname: "Nike Air Max Pulse",
      proprice: "₹ 13 995",
      inorout: "Just In",
      prodiscrip: "Women's Shoes",
      image: "/r23.png",
    },
    {
      proname: "Nike Air Max Pulse",
      proprice: "₹ 13 995",
      inorout: "Just In",
      prodiscrip: "Women's Shoes",
      image: "/r24.png",
    },
    {
      proname: "Nike Air Max Pulse",
      proprice: "₹ 13 995",
      inorout: "Just In",
      prodiscrip: "Women's Shoes",
      image: "/r25.png",
    },
    {
      proname: "Nike Air Max Pulse",
      proprice: "₹ 13 995",
      inorout: "Just In",
      prodiscrip: "Women's Shoes",
      image: "/r26.png",
    },
    {
      proname: "Nike Air Max Pulse",
      proprice: "₹ 13 995",
      inorout: "Just In",
      prodiscrip: "Women's Shoes",
      image: "/r27.png",
    },
    {
      proname: "Nike Air Max Pulse",
      proprice: "₹ 13 995",
      inorout: "Just In",
      prodiscrip: "Women's Shoes",
      image: "/r28.png",
    },
    {
      proname: "Nike Air Max Pulse",
      proprice: "₹ 13 995",
      inorout: "Just In",
      prodiscrip: "Women's Shoes",
      image: "/r29.png",
    },
    {
      proname: "Nike Air Max Pulse",
      proprice: "₹ 13 995",
      inorout: "Just In",
      prodiscrip: "Women's Shoes",
      image: "/r30.png",
    },
  ];

  return (
    <div>
      <HideFilter />
      <div className="w-full flex justify-center">
        <div className="w-[1344px] bg-white py-8 flex">
          <Sidebar />

          <div className="flex flex-wrap gap-4 justify-end">
            {carsName.map((pn, index) => (
              <div
                key={index}
                className="sm:w-6/12 md:w-4/12 xl:w-3/12" 
              >
                <div className="bg-white rounded-sm">
                  <Image
                    src={pn.image}
                    alt={pn.proname}
                    height={348}
                    width={348}
                    className="object-cover mb-4"
                  />
                  <h1 className="text-[15px] font-semibold text-[#9E3500]">
                    {pn.inorout}
                  </h1>
                  <h1 className="text-[15px] font-semibold mt-2">
                    {pn.proname}
                  </h1>
                  <h1 className="text-[15px] font-semibold text-gray-500">
                    {pn.prodiscrip}
                  </h1>
                  <p className="text-[15px] font-semibold text-gray-500">
                    1 Colour
                  </p>
                  <p className="text-[15px] font-semibold mt-3">
                    {pn.proprice}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Related />
    </div>
  );
};

export default FeaturedNew;