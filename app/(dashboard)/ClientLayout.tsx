"use client";
import { AppShell, Burger, Container, Group } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import NavBar from "../components/global/NavBar";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";

interface Props {
  hideNav?: boolean;
  content: React.ReactNode;
}

const ClientLayout = ({ content, hideNav }: Props) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: hideNav ? 0 : 300,
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

      {!hideNav && (
        <AppShell.Navbar className="deafult-navbar" bg="#ffffff00" bd={0}>
          <NavBar />
        </AppShell.Navbar>
      )}

      <AppShell.Main className="student-background">
        <Container maw={1200} p={0}>
          {content}
        </Container>
      </AppShell.Main>

      <AppShell.Footer>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
};

export default ClientLayout;
