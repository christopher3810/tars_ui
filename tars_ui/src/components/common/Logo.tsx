import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <div className="text-2xl font-bold text-gray-800">
      <Link to="/">TARS UI</Link>
    </div>
  );
};

export default Logo;
