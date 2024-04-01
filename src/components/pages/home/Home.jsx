import React from 'react'
import useFetch from '../../../lib/hooks/useFetch';
import Graph from './Graph';
import CryptoCards from './CryptoCards';

const Home = () => {
  return (
    <div className='content-page'>
      <div className="hero-header">
        <h1 className="hero-text">Welcome <span>Hacker <i className="fa-brands fa-ello"></i></span></h1>
        <button type="button">Button</button>
      </div>
      <Graph />
      <CryptoCards />
    </div>
  )
}

export default Home