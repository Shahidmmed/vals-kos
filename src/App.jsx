import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./Card";
import OpeningCard from "./OpeningCard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/vals-kos/" element={<Card />} />
          <Route path="/vals-kos/open" element={<OpeningCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
