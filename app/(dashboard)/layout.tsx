//<ClientLayout content={<Content>{children}</Content>} />

import Content from "../Content";
import ClientLayout from "./ClientLayout";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout content={<Content>{children}</Content>} />;
}
