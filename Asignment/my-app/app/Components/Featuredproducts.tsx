import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";
import { useRef } from "react";

const Featuredproducts = () => {
  const products = [
    {
      proname: "Nike Air Max Pulse",
      proprice: "₹ 13 995",
      prodiscrip: "Women's Shoes",
      image: "/pro1.png",
    },
    {
      proname: "Nike Air Max Pulse",
      proprice: "₹ 13 995",
      prodiscrip: "Men's Shoes",
      image: "/pro2.png",
    },
    {
      proname: "Nike Air Max 97 SE",
      proprice: "₹ 16 995",
      prodiscrip: "Men's Shoes",
      image: "/pro3.png",
    },
    {
      proname: "Nike Air Max SYSTM",
      proprice: "₹ 13 995",
      prodiscrip: "Women's Shoes",
      image: "/pro3.png",
    },
  ];

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -441.36, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 441.36, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full overflow-hidden px-4 lg:px-0 my-16">
      <div className="flex justify-between items-center py-4 w-[1344px] mx-auto">
        <h1 className="text-[22px] font-semibold">Best of Air Max</h1>
        <div className="flex gap-4 items-center">
          <h1 className="text-[15px] font-semibold">Shop</h1>
          <button
            className="bg-[#F5F5F5] text-xs rounded-full w-12 h-12 flex items-center justify-center"
            onClick={scrollLeft}
          >
            <ChevronLeft />
          </button>
          <button
            className="rounded-full text-xs bg-[#E5E5E5] w-12 h-12 flex items-center justify-center"
            onClick={scrollRight}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex space-x-4 w-max ms-28 overflow-x-auto"
      >
        {products.map((product, index) => (
          <div
            key={index}
            className="w-[441.36px] h-[510.36px] p-2"
          >
            <div>
              <Image
                src={product.image}
                alt={product.proname}
                height={441.36}
                width={441.36}
                className="object-cover"
              />
            </div>
            <div className="flex justify-between pt-3">
              <h3 className="text-[15px] font-semibold">{product.proname}</h3>
              <h3 className="text-[15px] font-semibold">{product.proprice}</h3>
            </div>
            <p className="text-[#757575] w-[200px] text-[16px]">
              {product.prodiscrip}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featuredproducts;
