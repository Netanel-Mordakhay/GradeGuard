import React from "react";
import AuthenticationLayout from "../components/layout/AuthenticationLayout";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthenticationLayout>{children}</AuthenticationLayout>;
}
