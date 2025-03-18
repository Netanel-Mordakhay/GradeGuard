"use client";
import { Paper, Box, Text, Center, Title, Flex, Group } from "@mantine/core";
import { usePathname } from "next/navigation";
import React from "react";

const pathToTitle: Record<string, string> = {
  "/dashboard": "Dashboard",
  "/courses": "Courses",
};

const PageTitle = () => {
  const pathname = usePathname();
  const pageTitle = pathToTitle[pathname] || "";
  return (
    <Group grow align="center" p="md" className="page-title">
      <Title c="blue" order={2}>
        {pageTitle}
      </Title>
    </Group>
  );
};

export default PageTitle;
