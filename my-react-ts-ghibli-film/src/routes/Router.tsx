import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import FilmDetails from '../pages/FilmDetails';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/film/:id" element={<FilmDetails />} />
    </Routes>
  );
};

export default Router;