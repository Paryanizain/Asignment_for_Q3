import React from "react";
import CComponent from "./Featuredproducts2";
const AllProducts = () => {
  let prod = "Nike Dri-FIT ADV TechKnit Ultra";
  let price = "₹ 3 895";
  let image = "Image.png";

  let prod2 = "Nike Dri-FIT Challenger";
  let price2 = "₹ 2 495";
  let image2 = "Image1.png";

  let prod3 = "Nike Dri-FIT ADV Run Division";
  let price3 = "₹ 5 295";
  let image3 = "Image2.png";

  let prod4 = "Nike Fast";
  let price4 = "₹ 3 795";
  let image4 = "Image3.png";
  return (
    <div>
      <CComponent
        img={image}
        pro={prod}
        rs={price}
        img2={image2}
        pro2={prod2}
        rs2={price2}
        img3={image3}
        pro3={prod3}
        rs3={price3}
        img4={image4}
        pro4={prod4}
        rs4={price4}
      />
    </div>
  );
};

export default AllProducts;
