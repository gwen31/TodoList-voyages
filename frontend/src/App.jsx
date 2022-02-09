import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import 'rsuite/dist/rsuite.min.css';
import "./app.css";
import Header from "./components/Header";
import Locations from "./components/Locations";
import AddLocation from "./pages/AddLocation";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Profil from "./pages/Profil";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Profil />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/home/departments/:id/locations" element={<Locations />} />
          <Route path="/addLocation" element={<AddLocation />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
     
   </BrowserRouter>
  );
};

export default App;
