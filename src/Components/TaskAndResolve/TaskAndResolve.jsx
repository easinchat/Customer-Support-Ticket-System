import React from "react";
import Resolve from "../Resolve/Resolve";

const TaskAndResolve = ({ data, resolveData, resolve, setCount }) => {
  // console.log(data.length);

  return (
    <div className="ml-5">
      <div>
        <h1 className="font-bold text-2xl mb-2">Task Status</h1>
        <div>
          {data.map((item) => {
            return (
              <div className="p-5 bg-white   ">
                <div className="bg-[#f5f5f5] p-3 w-full mb-2 rounded-2xl">
                  <h1 className="whitespace-nowrap">{item.title}</h1>
                  <button
                    className="btn btn-active bg-[#02A53B] text-white w-full mt-2"
                    onClick={() => {
                      resolveData(item);
                    }}
                  >
                    Complete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/*  ``````````````````````````````````` */}
      <div className="mt-3">
        <h1 className="font-bold text-2xl mb-2">Resolved Task</h1>
        <Resolve data={data} resolve={resolve} setCount={setCount}></Resolve>
      </div>
    </div>
  );
};

export default TaskAndResolve;

{
  /* <h1>{data.title}</h1>
          <button className="btn btn-active bg-[#02A53B] text-white w-full mt-2">
            Success
          </button> */
}
//  const handleResolve = (d) => {
//     onClick={() => handleResolve(item)}
//   };
// handleResolve = { handleResolve };
