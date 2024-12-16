import Image from "next/image";
const MiddleHero2 = () => {
  return (
    <div className="place-items-center">
      <div className="justify-self-center">
        <h1 className="text-[23px] font-bold">Don't Miss</h1>
        <Image
          src="/Hero2.png"
          alt="intro"
          width={1340}
          height={700}
          className="object-contain py-4"
        />
      </div>
      <div className="place-items-center space-y-8">
        <h1 className="text-[54px] font-semibold">FLIGHT ESSENTIALS</h1>
        <p className="text-[15px]">
          Your built-to-last, all-week wears—but with style only Jordan Brand
          can deliver.
        </p>
        <button className="text-white bg-black p-[7.5px] px-[22px] rounded-full">
          Shop
        </button>
      </div>
    </div>
  );
};

export default MiddleHero2;
