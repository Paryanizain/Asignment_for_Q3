import Image from "next/image";
const MiddleHero = () => {
  return (
    <div className="place-items-center">
      <div className="justify-self-center">
        <h1 className="text-[23px] font-bold">Featured</h1>
        <Image
          src="/intro1.jpeg"
          alt="intro"
          width={1340}
          height={700}
          className="object-contain py-4"
        />
      </div>
      <div className="place-items-center space-y-8">
        <h1 className="text-[54px] font-semibold">STEP INTO WHAT FEELS GOOD</h1>
        <p className="text-[15px]">
          Cause everyone should know the feeling of running in that perfect
          pair.
        </p>
        <button className="text-white bg-black p-[7.5px] px-[22px] rounded-full">
          Find Your Shoe
        </button>
      </div>
    </div>
  );
};

export default MiddleHero;
