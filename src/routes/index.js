import React from 'react';
import { Route, Routes } from 'react-router-dom';

export const route = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  );
};
