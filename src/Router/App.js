import Landing from "../Components/landing";
import Summary from "../Components/summary";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { myContext } from "../Helper/Context";
import "../styles.css";

export default function App() {
  const [myData, setData] = useState([]);
  return (
    <div className="App">
      <myContext.Provider value={{ myData, setData }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/summary" element={<Summary />} />
        </Routes>
      </myContext.Provider>
    </div>
  );
}
