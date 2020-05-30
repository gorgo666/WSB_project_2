/** @format */

import React, { useEffect, useState } from 'react';

import Ul from './Ul';

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

function Nav() {
  const { width } = useWindowDimensions();
  return (
    <nav>
      <Ul />
    </nav>
  );
}

export default Nav;
