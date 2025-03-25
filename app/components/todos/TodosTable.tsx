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
import { Course, TodoWithCourse } from "@/app/validationSchemas";
import { IconTrash } from "@tabler/icons-react";
import classes from "../../styles/CourseTable.module.css";
import TodoInfo from "./TodoInfo";
import DeleteTodo from "./DeleteTodo";
import ModalButton from "../global/ModalButton";
import TodoForm from "./TodoForm";

const TodosTable = ({
  todos,
  courses,
}: {
  todos: TodoWithCourse[];
  courses: Course[];
}) => {
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
              {/* Title line */}
              <Group justify="space-between" mr={10}>
                {/* Title */}
                <Box>{todo.title}</Box>
                {/* Badges - not visible if sm */}
                <Stack
                  w={120}
                  ta="center"
                  visibleFrom="sm"
                  align="center"
                  gap={5}
                >
                  <Badge>
                    {todo.dueDate
                      ? new Date(todo.dueDate).toLocaleDateString("he-IL")
                      : "-"}
                  </Badge>
                  <Badge>Importance: {todo.importance || "-"}</Badge>
                  {todo.course && <Badge>{todo.course?.title}</Badge>}
                </Stack>
              </Group>
            </Accordion.Control>
            <Accordion.Panel className="code-background">
              {/* TodoInfo card - Edit/Delete modals as children */}
              <TodoInfo todo={todo}>
                <ModalButton>
                  <TodoForm todo={todo} courses={courses} />
                  <IconTrash size={16} />
                </ModalButton>
                <ModalButton>
                  <DeleteTodo todo={todo} />
                  <IconTrash size={16} />
                </ModalButton>
              </TodoInfo>
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
