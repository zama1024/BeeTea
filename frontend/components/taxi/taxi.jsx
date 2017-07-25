import React from 'react';
import { Link } from 'react-router-dom';

const Taxi = () => {
  return(
    <div>
      <h2>Sorry, We are still working on our Taxi feature.</h2>
      <h2>Meanwhile, please check out our Bus service!</h2>
      <div className='box'><Link to='/bus'>Bus Service</Link></div>
    </div>
  );
};

export default Taxi;
