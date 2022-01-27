import React from "react";
import { BrowserRouter } from "react-router-dom";

import 'rsuite/dist/rsuite.min.css';
import "./app.css";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
    
      </div>
     
   </BrowserRouter>
  );
};

export default App;
