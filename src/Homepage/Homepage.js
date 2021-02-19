import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

export default function Homepage() {
  return (
    <section className="about-section">
      <div className="hero-content">
        <h2>Welcome to the FIFO adoption center!</h2>
        <p>
          At the FIFO adoption center we have a firm 'first-come-first-serve'
          policy. The first pets in are the first adopted, and the first in line
          to adopt are the first to be able to choose a pet.{' '}
        </p>
        <p>
          Click the button below to visit our adoption page to see the pets
          currently available for adoption and get in the line to adopt!
        </p>
      </div>
      <Link to={'/adoption'}>Adopt a pet</Link>
    </section>
  );
}
