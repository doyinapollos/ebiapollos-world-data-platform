/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from 'src/pages/Home';
import { NonAuthRoutes } from './url';

function routers() {
  return (
    <div>
      <Routes>
        <Route path={NonAuthRoutes.home} element={<Home />} />{' '}
      </Routes>{' '}
    </div>
  );
}

export default routers;
