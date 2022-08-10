import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Expert from '../Expert/Expert';
import './Experts.css';

const Experts = () => {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    fetch('experts.json')
      .then((res) => res.json())
      .then((data) => setExperts(data));
  });
  return (
    <div>
      <h1 className="text-primary">our experts</h1>
      <br />
      <br />
      <div className="expert-container">
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Experts;
