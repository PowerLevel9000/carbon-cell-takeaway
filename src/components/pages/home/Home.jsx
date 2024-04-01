import React from 'react'
import useFetch from '../../../lib/hooks/useFetch';
import Graph from './Graph';
import CryptoCards from './CryptoCards';

const Home = () => {
  const { data, error, loading } = useFetch('https://jsonplaceholder.typicode.com/posts', 'Home Component');
  return (
    <div className='content-page'>
      <Graph />
      <CryptoCards />
    </div>
  )
}

export default Home