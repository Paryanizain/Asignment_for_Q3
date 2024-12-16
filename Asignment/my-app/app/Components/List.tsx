const List = () => {
  return (
    <div className="my-20 w-[880px] h-[192px] flex justify-between">
      <div>
        <h1 className="font-semibold">Icons</h1>
        <ul className="text-[#757575] pt-7 space-y-3">
          <li>Air Force 1</li>
          <li>Huarache</li>
          <li>Air Max 90</li>
          <li>Air Max 95</li>
        </ul>
      </div>
      <div>
        <h1 className="font-semibold">Shoes</h1>
        <ul className="text-[#757575] pt-7 space-y-3">
          <li>All Shoes</li>
          <li>Custom Shoes</li>
          <li>Jordan Shoes</li>
          <li>Running Shoes</li>
        </ul>
      </div>
      <div>
        <h1 className="font-semibold">Clothing</h1>
        <ul className="text-[#757575] pt-7 space-y-3">
          <li>All Clothing</li>
          <li>Modest Wear</li>
          <li>Hoodies & Pullovers</li>
          <li>Shirts & Tops</li>
        </ul>
      </div>
      <div>
        <h1 className="font-semibold">Kids&apos;</h1>
        <ul className="text-[#757575] pt-7 space-y-3">
          <li>Infant & Toddler Shoes</li>
          <li>Kids&apos; Shoes</li>
          <li>Kids&apos; Jordan Shoes</li>
          <li>Kids&apos; Basketball Shoes</li>
        </ul>
      </div>
    </div>
  );
};

export default List;
