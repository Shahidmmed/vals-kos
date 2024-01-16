import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./Card";
import OpeningCard from "./OpeningCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/*  <Card></Card>*/}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/open" element={<OpeningCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
