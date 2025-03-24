"use client";
import React from "react";
import { IconBug } from "@tabler/icons-react";
import { Button, Box } from "@mantine/core";
import Link from "next/link";

const ReportBug = () => {
  return (
    <Box w={200} mx="auto">
      <Link href="/contact-us" style={{ textDecoration: "none" }}>
        <Button
          variant="light"
          fullWidth
          radius="md"
          size="xs"
          color="var(--mantine-color-body)"
          leftSection={<IconBug size={18} />}
        >
          REPORT A BUG
        </Button>
      </Link>
    </Box>
  );
};

export default ReportBug;
