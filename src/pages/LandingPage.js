/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
import React from 'react';
import Home from './Home';
import MobileView from './MobileView';

function LandingPage() {
  return (
    <>
      <div className="hidden md:block lg:block ">
        <Home />
      </div>{' '}
      <div className="md:hidden lg:hidden ">
        <MobileView />
      </div>{' '}
    </>
  );
}

export default LandingPage;
