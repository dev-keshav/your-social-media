// src/components/FrontPage.js

import React from 'react';
import './firstPage.css';
import { Link } from 'react-router-dom';

const FirstPage = () => {
  return (
    <div className="container">
      <h1 className="logo">Your Social Media</h1>
      <p className="tagline">
        Let's Connect Together
      </p>
      <Link className="login-btn" to={"/login"}>Login</Link>
    </div>
  );
};

export default FirstPage;
