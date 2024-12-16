import Image from "next/image";
const Herosection = () => {
  return (
    <div className="place-items-center">
      <div className="bg-[#E5E5E5] w-full place-items-center">
        <h1 className="text-[15px] font-semibold pt-2">Hello Nike App</h1>
        <h3 className="text-[11px] p-2">
          Download the app to access everything Nike.
          <span className="underline">Get Your Great</span>
        </h3>
      </div>
      <Image
        src="/nikehero.png"
        alt="Hero"
        width={1340}
        height={700}
        className="object-contain"
      />
      <h1 className="text-[15px] pt-12 font-medium">First Look</h1>
      <h1 className="text-[56px]">Nike Air Max Pulse</h1>
      <p className="text-[15px]">
        Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
        Pulse
      </p>
      <p className="text-[15px]">
        —designed to push you past your limits and help you go to the max.
      </p>
      <div className="space-x-2 pt-8">
        <button className="text-white bg-black p-[7.5px] px-[22px] rounded-full">
          Notify Me
        </button>
        <button className="text-white bg-black p-[7.5px] px-[22px] rounded-full">
          Shop Air Max
        </button>
      </div>
    </div>
  );
};

export default Herosection;
