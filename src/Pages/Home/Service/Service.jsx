import React from 'react';
import './Service.css';

const Service = ({ service }) => {
  // const {service} = props;
  const { name, price, description, img } = service;
  return (
    <div className="service">
      <h2>{name}</h2>
      <img src={img} alt="" />
      <h2>Price: {price}$</h2>
      <p className="px-3">{description}</p>
    </div>
  );
};

export default Service;
