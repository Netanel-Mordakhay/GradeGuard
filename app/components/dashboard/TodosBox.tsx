import React from "react";
import DefaultCard from "../global/DefaultCard";
import { TodoWithCourse } from "@/app/validationSchemas";
import { Divider, Group, Text } from "@mantine/core";

interface Props {
  todos: TodoWithCourse[];
}

const TodosBox = ({ todos }: Props) => {
  const latestTodos = todos.slice(0, 5);

  return (
    <DefaultCard
      title="My Assignments"
      link="todos"
      linkText="View All Assignments"
    >
      {latestTodos.map((todo) => (
        <React.Fragment key={todo.id}>
          <Group justify="space-between">
            <Text className="text-secondary text-lead-md">{todo.title}</Text>
            <Text className="text-label-xs">
              {todo.dueDate ? new Date(todo.dueDate).toLocaleDateString() : "-"}
            </Text>
          </Group>
          <Divider />
        </React.Fragment>
      ))}
    </DefaultCard>
  );
};

export default TodosBox;
