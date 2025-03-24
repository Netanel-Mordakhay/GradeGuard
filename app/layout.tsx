import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import { Rubik } from "next/font/google";
import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";
import "@/app/globals.css";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";

const rubik = Rubik({
  subsets: ["latin", "hebrew"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

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
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
