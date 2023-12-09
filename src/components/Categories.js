import React from "react";

const Categories = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="flex gap-2 items-center bg-[#FBFBFD] p-2 rounded-md">
        <div className="avatar">
          <div className="w-14 rounded-full">
            <img
              alt=""
              src="https://i.pinimg.com/originals/2e/cf/73/2ecf7364cd78b7222311518159a72179.jpg"
            />
          </div>
        </div>
        <h2 className="text-3xl font-semibold">Traveler</h2>
      </div>
      <div className="flex gap-2 items-center bg-[#FBFBFD] p-2 rounded-md">
        <div className="avatar">
          <div className="w-14 rounded-full">
            <img
              alt=""
              src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5297921.png"
            />
          </div>
        </div>
        <h2 className="text-3xl font-semibold">Food</h2>
      </div>
      <div className="flex gap-2 items-center bg-[#FBFBFD] p-2 rounded-md">
        <div className="avatar">
          <div className="w-14 rounded-full">
            <img
              alt=""
              src="https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_640.png"
            />
          </div>
        </div>
        <h2 className="text-3xl font-semibold">Products</h2>
      </div>
      <div className="flex gap-2 items-center bg-[#FBFBFD] p-2 rounded-md">
        <div className="avatar">
          <div className="w-14 rounded-full">
            <img
              alt=""
              src="https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg"
            />
          </div>
        </div>
        <h2 className="text-3xl font-semibold">Design</h2>
      </div>
    </div>
  );
};

export default Categories;
