import React from 'react';
import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <div>
      Homepage here
      <Link to={'/adoption'}>Adopt a pet</Link>
    </div>
  );
}
