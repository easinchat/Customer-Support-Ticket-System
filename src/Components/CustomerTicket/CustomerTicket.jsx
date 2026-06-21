import React from "react";

const CustomerTicket = ({ data }) => {
  const { createdAt, customer, description, id, priority, status, title } =
    data;
  //   console.log(id);
  return (
    <div>
      <div className="shadow-md p-4">
        <div className="flex justify-between ">
          <h3 className="font-bold text-xl">{title}</h3>
          <button className=" flex py-2 px-4 gap-2 bg-amber-200 rounded-3xl items-center">
            <img src="https://i.ibb.co.com/8LWYQcbM/Ellipse-22.png" alt="" />
            <span>{status}</span>
          </button>
        </div>
        <p>{description}</p>

        <div className="flex justify-between">
          <div className="flex gap-3">
            <p>#1001</p>
            <p className="text-red-500 font-semibold">{priority}</p>
          </div>
          <div className="flex gap-3">
            <span className="whitespace-nowrap">{customer}</span>
            <img src="https://i.ibb.co.com/tTLCrwNP/Vector-3.png" alt="" />
            <span className="whitespace-nowrap">{createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTicket;
