// components/AdminLayout.js
import React,{ ReactNode } from 'react';

interface AdminLayoutProps {
    children: ReactNode;
  }

const AdminLayout: React.FC<AdminLayoutProps>  = ({ children }) => {
  return (
    <div>
      <header>Admin Header</header>
      <aside>Admin Sidebar</aside>
      <main>{children}</main>
    </div>
  );
};

export default AdminLayout;
