// components/UserLayout.js
import React,{ ReactNode } from 'react';

interface UserLayoutProps {
    children: ReactNode;
  }

const UserLayout: React.FC<UserLayoutProps> = ({ children }) => {
  return (
    <div>
      <header>User Header</header>
      <main>{children}</main>
    </div>
  );
};

export default UserLayout;
