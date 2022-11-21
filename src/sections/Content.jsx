import React from 'react';
import Heart from './Heart/Heart';
import Sleep from './Sleep/Sleep';
import Health from './Health.js/Health';
// import Convenience from './Convenience/Convenience';
import Footer from '../layout/Footer';

function Content() {
  return (
    <>
      <Health />
      <Heart />
      <Sleep />
      {/* <Convenience /> */}
      <Footer />
    </>
  );
}

export default Content;
