import React from 'react';
import './page404.css';

const Page404 = () => {
  return (
    <div className="container">
      <h1 className="error-text">404</h1>
      <p className="error-description">
        Bhai Kaha aagye tum ?
      </p>
      <a href="/" className="error-link">
        Go to Home
      </a>
    </div>
  );
};

export default Page404;
