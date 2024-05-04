import Homepage from "./Homepage/Homepage";
import Aboutme from "./AboutMe/Aboutme";
import { Routes, Route } from "react-router-dom";
import "tailwindcss/tailwind.css";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutme" element={<Aboutme />} />
      </Routes>
    </>
  );
};

export default App;
