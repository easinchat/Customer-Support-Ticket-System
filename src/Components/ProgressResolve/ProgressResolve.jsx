import React from "react";
import leftImg from "../../assets/vector-1.png";
// import rightImg from "../../assets/vector2.png";

const ProgressResolve = ({ count }) => {
  return (
    <div className="max-w-300 mx-auto">
      <div className="flex justify-between gap-5 mt-20">
        <div className="relative w-[708px] h-[250px] rounded-xl flex flex-col items-center justify-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] overflow-hidden">
          <img
            src={leftImg}
            alt=""
            className="absolute left-0 top-0 h-full object-cover opacity-60 pointer-events-none"
          />
          <img
            src={leftImg}
            alt=""
            className="absolute right-0 top-0 h-full object-cover opacity-60  pointer-events-none scale-x-[-1]"
          />
          <h1 className="text-white text-2xl relative z-10">In-Progress</h1>
          <h1 className="text-white font-bold text-6xl relative z-10">
            {count}
          </h1>
        </div>
        <div className="relative w-[708px] h-[250px] rounded-xl flex flex-col items-center justify-center bg-gradient-to-r from-[#54CF68] to-[#00827A] overflow-hidden">
          <img
            src={leftImg}
            alt=""
            className="absolute left-0 top-0 h-full object-cover opacity-60  pointer-events-none"
          />
          <img
            src={leftImg}
            alt=""
            className="absolute right-0 top-0 h-full object-cover opacity-60 pointer-events-none scale-x-[-1]"
          />
          <h1 className="text-2xl text-white">Resolved</h1>
          <h1 className=" text-white font-bold text-6xl relative z-10">0</h1>
        </div>
      </div>
    </div>
  );
};

export default ProgressResolve;
