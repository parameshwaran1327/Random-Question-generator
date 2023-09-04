// This is the Home page and enterence page 

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-container'> 
      <h1 className='welcome'>Welcome to the Quiz!</h1>
      <Link
        to={{
          pathname: '/question',
        }}
      >  
        <button className='home-button'>Start Quiz</button>
      </Link>
    </div>
  );
};

export default Home;
