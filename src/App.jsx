import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
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
  // const [count, setCount] = useState(0);

  return (
    <>
      <Navbar></Navbar>
      <ProgressResolve></ProgressResolve>

      <CastomersTickets customerData={customerData}></CastomersTickets>
      <Footer></Footer>
    </>
  );
}

export default App;
