import React from "react";

const Instragram = () => {
  return (
    <div className="rounded my-7 p-10 bg-[#FBFBFD]">
      <h2 className="text-2xl font-semibold border-b pb-1 mb-5 text-center">
        Instagram
      </h2>
      <div className="grid grid-cols-3 gap-2">
        <div className="overflow-hidden rounded-lg">
          <img
            src="https://new.axilthemes.com/demo/react/blogar/images/small-images/instagram-md-01.webp?imwidth=256"
            alt=""
            className="hover:scale-105"
          />
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            src="https://new.axilthemes.com/demo/react/blogar/images/small-images/instagram-md-02.webp?imwidth=256"
            alt=""
            className="hover:scale-105"
          />
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            src="https://new.axilthemes.com/demo/react/blogar/images/small-images/instagram-md-03.webp?imwidth=256"
            alt=""
            className="hover:scale-105"
          />
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            src="https://new.axilthemes.com/demo/react/blogar/images/small-images/instagram-md-04.webp?imwidth=256"
            alt=""
            className="hover:scale-105"
          />
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            src="https://new.axilthemes.com/demo/react/blogar/images/small-images/instagram-md-05.webp?imwidth=256"
            alt=""
            className="hover:scale-105"
          />
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            src="https://new.axilthemes.com/demo/react/blogar/images/small-images/instagram-md-06.webp?imwidth=256"
            alt=""
            className="hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Instragram;
