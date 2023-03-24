import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderNavItemProps {
  to: string;
  label: string;
}

const HeaderNavItem: React.FC<HeaderNavItemProps> = ({ to, label }) => {
  return (
    <Link
      to={to}
      className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
    >
      {label}
    </Link>
  );
};

export default HeaderNavItem;
