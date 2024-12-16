import Image from "next/image";
const Intro = () => {
    return (
      <div className='w-[1344px] h-[592px] mt-20'>
        <h1 className="text-[23px] font-bold">
        The Essentials
        </h1>
        <div className="flex justify-between">
        <Image
          src="/Frame.png"
          alt="Frame"
          width={440}
          height={540}
          className="object-contain py-4"
        />
         <Image
          src="/Frame2.png"
          alt="Frame2"
          width={440}
          height={540}
          className="object-contain py-4"
        />
         <Image
          src="/Frame3.png"
          alt="Frame3"
          width={440}
          height={540}
          className="object-contain py-4"
        />
        </div>
      </div>
    );
  };
  
  export default Intro;