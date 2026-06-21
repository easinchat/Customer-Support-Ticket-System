import React from "react";

const TaskAndResolve = ({ data }) => {
  console.log(data.title);
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
                  <button className="btn btn-active bg-[#02A53B] text-white w-full mt-2">
                    Success
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
        <p>No resolved tasks yet.</p>
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
