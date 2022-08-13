import React from 'react';
import { NavLink } from 'react-bootstrap';
import { Link, Navigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
  // const {service} = props;
  const { id, name, price, description, img } = service;
  return (
    <div className="service pb-3">
      <h2>{name}</h2>
      <img src={img} alt="" />
      <h2>Price: {price}$</h2>
      <p className="px-3">{description}</p>
      {/* <button className="btn btn-primary"> Book {name.toLowerCase()}</button> */}
      <Link to={`/booking/${id}`}>
        <button className="btn btn-primary"> Book {name.toLowerCase()}</button>
      </Link>
    </div>
  );
};

export default Service;
