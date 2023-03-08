/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from 'src/pages/LandingPage';
import { NonAuthRoutes } from './url';

function routers() {
  return (
    <div>
      <Routes>
        <Route path={NonAuthRoutes.landingPage} element={<LandingPage />} />{' '}
      </Routes>{' '}
    </div>
  );
}

export default routers;
