import React from 'react';
import HeaderNavItem from './HeaderNavItem';

const HeaderNav: React.FC = () => {
  return (
    <nav className="space-x-4">
      <HeaderNavItem to="/" label="Home" />
      <HeaderNavItem to="/blog" label="Blog" />
      <HeaderNavItem to="/article-search" label="Article Search" />
      <HeaderNavItem to="/email-registration" label="Email Registration" />
    </nav>
  );
};

export default HeaderNav;
