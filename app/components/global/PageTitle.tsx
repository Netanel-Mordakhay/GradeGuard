"use client";
import { Paper, Box, Text, Center, Title, Flex, Group } from "@mantine/core";
import { usePathname } from "next/navigation";
import { rubik } from "../../styles/fonts";
import React from "react";

const pathToTitle: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/courses": "Courses",
  "/profile": "User Profile",
};

const PageTitle = () => {
  const pathname = usePathname();
  const pageTitle = pathToTitle[pathname] || "";
  return (
    <Group grow align="center" p="md" className="page-title">
      <Title className={rubik.className} c="blue" order={2} fw={500}>
        {pageTitle}
      </Title>
    </Group>
  );
};

export default PageTitle;
