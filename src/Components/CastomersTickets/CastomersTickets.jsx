import React, { use } from "react";
import CustomerTicket from "../CustomerTicket/CustomerTicket";

const CastomersTickets = ({ customerData }) => {
  const getData = use(customerData);
  console.log(getData[0]);
  return (
    <div className="max-w-300 mx-auto mt-20 ">
      <h1 className="text-2xl font-bold mb-4">Customer Tickets</h1>
      <div className="flex  justify-between ">
        <div className="grid md:grid-cols-2 gap-10 ">
          {getData.map((data) => (
            <CustomerTicket data={data}></CustomerTicket>
          ))}
        </div>
        <div className="ml-3">
          <div>
            <h1 className="font-bold text-2xl mb-2">Task Status</h1>
            <p>Select a ticket to add to Task Status</p>
          </div>
          <div className="mt-3">
            <h1 className="font-bold text-2xl mb-2">Resolved Task</h1>
            <p>No resolved tasks yet.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CastomersTickets;
