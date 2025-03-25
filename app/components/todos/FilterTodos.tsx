import { Stack, Group, Text } from "@mantine/core";
import React from "react";

const FilterTodos = () => {
  return (
    <Stack>
      <Group justify="space-between">
        <Text>Catory:</Text>
        <div>inputhere</div>
      </Group>
      <Group justify="space-between">
        <Text>Importance:</Text>
        <div>inputhere</div>
      </Group>
      <Group justify="space-between">
        <Text>Course:</Text>
        <div>inputhere</div>
      </Group>
      <Group justify="space-between">
        <Text>Due date:</Text>
        <div>inputhere</div>
      </Group>
    </Stack>
  );
};

export default FilterTodos;
