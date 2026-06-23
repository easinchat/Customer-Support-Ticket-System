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
  const [resolve, setResolve] = useState([]);
  const handleClick = (p) => {
    toast("In-Progress Sir");
    setCount(count + 1);
    handleComplete(p);
  };
  const handleComplete = (item) => {
    const solveData = [...data, item];
    setData(solveData);
    console.log(item);
  };
  const resolveData = (item) => {
    console.log("resolveData is Clicked", item.id);
    const remaining = data.filter((i) => i.id !== item.id);

    setData(remaining);
    const solve = [...resolve, item];
    setResolve(solve);
    setCount(count - 1);
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
        resolveData={resolveData}
        resolve={resolve}
        setCount={setCount}
      ></CastomersTickets>

      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
