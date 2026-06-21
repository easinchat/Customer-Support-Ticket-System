import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ProgressResolve from "./Components/ProgressResolve/ProgressResolve";
import CastomersTickets from "./Components/CastomersTickets/CastomersTickets";
import Footer from "./Components/Footer/Footer";

const fetchPromise = async () => {
  const res = await fetch("/customer.json");
  return res.json();
};
const customerData = fetchPromise();

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const handleClick = (p) => {
    toast("In-Progress Sir");
    setCount(count + 1);
    taskStatus(p);
  };
  const taskStatus = (d) => {
    const solvedata = [...data, d];
    return setData(solvedata);
  };
  // console.log(data);
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <ProgressResolve count={count}></ProgressResolve>

      <CastomersTickets
        handleClick={handleClick}
        customerData={customerData}
        data={data}
      ></CastomersTickets>

      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
