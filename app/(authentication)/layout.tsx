import React from "react";
import AuthenticationLayout from "../components/layout/AuthenticationLayout";
import ClientLayout from "../(dashboard)/ClientLayout";
import Content from "../Content";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientLayout content={<Content>{children}</Content>} hideNav={true} />
  );
}
