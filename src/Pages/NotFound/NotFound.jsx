import React from 'react';
import { NavLink } from 'react-bootstrap';
import Img from '../../images/404.jpg';
const NotFound = () => {
  return (
    <div>
      <h1 className="text-danger">NOt Found</h1>
      <img src={Img} alt="" />
      <NavLink to="/"></NavLink>
    </div>
  );
};

export default NotFound;
