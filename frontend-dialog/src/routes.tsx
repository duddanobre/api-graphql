import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './Components/Home';
import Person from './Components/Person';

export default function Rotas(){

  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/person/:name" element={<Person />} />
    </Routes>
  </BrowserRouter>
  )

}
