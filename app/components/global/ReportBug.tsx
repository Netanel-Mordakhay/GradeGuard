"use client";
import React from "react";

import { Card, Button, Text } from "@mantine/core";
import Link from "next/link";

const ReportBug = () => {
  return (
    <Card shadow="sm" padding="lg" radius="md" c="white" bg="white" w="100%">
      <Text size="sm" c="dimmed" ta="center">
        Found a bug? let me know, so I'll be able to make{" "}
        <span style={{ fontWeight: 600 }}>GradeGuard</span> the best it could
        be!
      </Text>

      <Link href="/contact-us" style={{ textDecoration: "none" }}>
        <Button color="blue" fullWidth mt="md" radius="md">
          REPORT A BUG
        </Button>
      </Link>
    </Card>
  );
};

export default ReportBug;
