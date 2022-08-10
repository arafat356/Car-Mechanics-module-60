import React from 'react';
import './Expert.css';

const Expert = ({ expert }) => {
  const { name, expertize, img } = expert;
  return (
    <div className="expert">
      <h2>{name}</h2>
      <img src={img} alt="" />
      <p className="text-danger">{expertize}</p>
    </div>
  );
};

export default Expert;
