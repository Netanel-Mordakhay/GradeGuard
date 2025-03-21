import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "@mantine/core/styles.css";
import "@/app/globals.css";

import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import ClientLayout from "./(dashboard)/ClientLayout";
import Content from "./Content";

export const metadata: Metadata = {
  title: "GradeGuard",
  description: "Protect your grades.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
