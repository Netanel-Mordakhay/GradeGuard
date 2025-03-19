"use client";
import { AppShell, Burger, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import NavBar from "./components/global/NavBar";
import Header from "./components/global/Header";
import Footer from "./components/global/Footer";

const ClientLayout = ({ content }: { content: React.ReactNode }) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      footer={{ height: 35 }}
      padding="md"
    >
      <AppShell.Header className="layout-header">
        <Header>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        </Header>
      </AppShell.Header>

      <AppShell.Navbar className="deafult-navbar" bg="#ffffff00" bd={0}>
        <NavBar />
      </AppShell.Navbar>

      <AppShell.Main className="student-background">{content}</AppShell.Main>

      <AppShell.Footer>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
};

export default ClientLayout;
