import React, { use, useState } from "react";
import CustomerTicket from "../CustomerTicket/CustomerTicket";
import TaskAndResolve from "../TaskAndResolve/TaskAndResolve";

const CastomersTickets = ({
  customerData,
  handleClick,
  data,
  resolveData,
  resolve,
  setCount,
}) => {
  const getData = use(customerData);

  // console.log(getData[0]);

  return (
    <div className="max-w-300 mx-auto mt-20 ">
      <h1 className="text-2xl font-bold mb-4">Customer Tickets</h1>
      <div className="flex  justify-between ">
        <div className="grid md:grid-cols-2 gap-10 ">
          {getData.map((data) => (
            <CustomerTicket
              handleClick={handleClick}
              data={data}
            ></CustomerTicket>
          ))}
        </div>
        <TaskAndResolve
          resolveData={resolveData}
          data={data}
          handleClick={handleClick}
          resolve={resolve}
          setCount={setCount}
        ></TaskAndResolve>
      </div>
    </div>
  );
};

export default CastomersTickets;
