import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { rubik } from "./styles/fonts";
import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/dates/styles.css";
import "@/app/globals.css";
import {
  ColorSchemeScript,
  DirectionProvider,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";

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
      <body className={rubik.className}>
        <DirectionProvider>
          <MantineProvider>
            <MantineProvider>{children}</MantineProvider>
          </MantineProvider>
        </DirectionProvider>
      </body>
    </html>
  );
}
