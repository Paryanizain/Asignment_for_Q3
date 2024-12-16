import Image from "next/image";
import { MapPin } from 'lucide-react';
const Footer = () => {
  return (
    <div className="w-full h-[331px] bg-black place-items-center">
      <div className="flex justify-center pt-12">
        <div className="w-[1372px] h-[213px] flex justify-between">
          <div className="flex">
            <div className="text-white text-[12px] space-y-4 w-[245.25px]">
              <h1>Find A Store</h1>
              <h1>Become A Member</h1>
              <h1>Sign Up for Email</h1>
              <h1>Send Us Feedback</h1>
              <h1>Student Discounts</h1>
            </div>
            <div className="text-[10px] space-y-4 w-[245.25px]">
              <h1 className="text-white text-[12px]">Get Help</h1>
              <ul className="text-[#7E7E7E] space-y-2">
                <li>Order Status</li>
                <li>Delivery</li>
                <li>Returns</li>
                <li>Payment Options</li>
                <li>Contact Us On Nike.com Inquiries</li>
                <li>Contact Us On All Other Inquiries</li>
              </ul>
            </div>
            <div className="text-[10px] space-y-4 w-[245.25px]">
              <h1 className="text-white text-[12px]">About Nike</h1>
              <ul className="text-[#7E7E7E] space-y-2">
                <li>News</li>
                <li>Careers</li>
                <li>Investors</li>
                <li>Sustainability</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="flex gap-3">
            <Image
              src="/f1.png"
              alt="TW"
              width={30}
              height={30}
              className="object-contain py-4"
            />
            
            <Image
              src="/f2.png"
              alt="FB"
              width={30}
              height={30}
              className="object-contain py-4"
            />
            <Image
              src="/f3.png"
              alt="YT"
              width={30}
              height={30}
              className="object-contain py-4"
            />
            <Image
              src="/f4.png"
              alt="INT"
              width={30}
              height={30}
              className="object-contain py-4"
            />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1372px] flex justify-between mt-8">
        <div className="flex gap-6">
            <h1 className="text-white text-[12px] flex gap-2"><span><MapPin /></span>India</h1>
            <p className="text-[#7E7E7E] text-[11px]">© 2023 Nike, Inc. All Rights Reserved</p>
        </div>
        <ul className="flex text-[#7E7E7E] gap-6 text-[12px]">
            <li>Guides</li>
            <li>Terms of Sale</li>
            <li>Terms of Use</li>
            <li>Nike Privacy Policy</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
