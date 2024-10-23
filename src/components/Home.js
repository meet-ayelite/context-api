// src/Home.js
import React, { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

function Home() {

  const {count} = useContext(CounterContext)


  return (
    <div className="home-section">
      <h1>Welcome to Our Construction Company</h1>
      <h2>{count}</h2>
      <p>We provide top-quality construction services for residential and commercial projects.</p>
    </div>
  );
}

export default Home;
