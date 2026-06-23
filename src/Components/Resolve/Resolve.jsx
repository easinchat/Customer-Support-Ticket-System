import React from "react";

const Resolve = ({ resolve }) => {
  // console.log(data.length);

  return (
    <div className="ml-5">
      <div>
        <div>
          {resolve.map((item) => {
            return (
              <div className="p-5 bg-white   ">
                <div className="bg-[#f5f5f5] p-3 w-full mb-2 rounded-2xl">
                  <h1 className="whitespace-nowrap">{item.title}</h1>
                  <button className="btn btn-active bg-[#02A53B] text-white w-full mt-2">
                    Complete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/*  ``````````````````````````````````` */}
    </div>
  );
};

export default Resolve;
// , handleResolve
