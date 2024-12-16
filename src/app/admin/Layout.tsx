import React from "react";
import AdminLayout from "../../components/Layout/AdminLayout";

export default function AdminPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AdminLayout>
        {children}
    </AdminLayout>
  );
}
