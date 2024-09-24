// src/pages/UnauthorizedPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const UnauthorizedPage = () => {
  return (
    <div className="unauthorized-container">
      <h1>Unauthorized Access</h1>
      <p>You do not have permission to view this page.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default UnauthorizedPage;
