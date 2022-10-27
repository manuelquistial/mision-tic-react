import React from 'react';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Home } from './pages/Home';
import { Hamburguesas } from './pages/Hamburguesas';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/hamburguesas' element={<Hamburguesas />} />
        <Route path='/admin/inventario' element={<Hamburguesas />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
