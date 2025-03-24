"use client";
import React, { useState } from "react";
import {
  Accordion,
  Text,
  Box,
  Group,
  Button,
  Badge,
  Stack,
} from "@mantine/core";
import { TodoWithCourse } from "@/app/validationSchemas";
import { IconCalendar, IconBook } from "@tabler/icons-react";
import classes from "../../styles/CourseTable.module.css";

const TodosTable = ({ todos }: { todos: TodoWithCourse[] }) => {
  const [visibleCount, setVisibleCount] = useState(5);
  const visibleTodos = todos.slice(0, visibleCount);

  if (todos.length === 0) {
    return (
      <Text ta="center">
        Whoops... looks like you don't have any assignments yet.
      </Text>
    );
  }

  return (
    <>
      <Accordion variant="separated" classNames={classes}>
        {visibleTodos.map((todo) => (
          <Accordion.Item key={todo.id} value={String(todo.id)}>
            <Accordion.Control>
              <Group justify="space-between" mr={10}>
                <Box>{todo.title}</Box>
                <Group gap="xs">
                  {todo.category && (
                    <Badge variant="light" color="gray">
                      {todo.category}
                    </Badge>
                  )}
                  {todo.color && (
                    <Badge variant="light" color={todo.color.toLowerCase()}>
                      {todo.color}
                    </Badge>
                  )}
                  {todo.dueDate && (
                    <Badge
                      variant="light"
                      color="blue"
                      leftSection={<IconCalendar size={12} />}
                    >
                      {new Date(todo.dueDate).toLocaleDateString()}
                    </Badge>
                  )}
                </Group>
              </Group>
            </Accordion.Control>
            <Accordion.Panel className="code-background">
              <Stack gap="xs">
                {todo.description && <Text>{todo.description}</Text>}
                {todo.course && (
                  <Badge
                    variant="light"
                    color="green"
                    leftSection={<IconBook size={12} />}
                  >
                    Linked to course: {todo.course.title}
                  </Badge>
                )}
                {todo.importance && (
                  <Badge variant="light" color="red">
                    Importance: {todo.importance}
                  </Badge>
                )}
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>

      {visibleCount < todos.length && (
        <Button onClick={() => setVisibleCount((prev) => prev + 5)}>
          Load More
        </Button>
      )}
    </>
  );
};

export default TodosTable;
