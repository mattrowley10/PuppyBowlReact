import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import SinglePupper from "./Components/SinglePupper";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AddPupper from "./Components/AddPupper";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<SinglePupper />} />
        <Route path="/player_form" element={<AddPupper />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
