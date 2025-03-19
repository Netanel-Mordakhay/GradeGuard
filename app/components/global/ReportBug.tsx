import React from "react";
import { IconBug } from "@tabler/icons-react";
import { Card, Button, Text } from "@mantine/core";

const ReportBug = () => {
  return (
    <Card shadow="sm" padding="lg" radius="md" c="white" bg="white" w="100%">
      <Text size="sm" c="dimmed" ta="center">
        Found a bug? let me know, so I'll be able to make{" "}
        <span style={{ fontWeight: 600 }}>GradeGuard</span> the best it could
        be!
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        REPORT A BUG
      </Button>
    </Card>
  );
};

export default ReportBug;
