import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";


import HomePage from "./pages/Home.jsx";
import LoginPage from "./pages/Login.jsx";
import HeroesDetailsPage from "./pages/HeroesDetails.jsx";


function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/heroesDetails" element={<HeroesDetailsPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;