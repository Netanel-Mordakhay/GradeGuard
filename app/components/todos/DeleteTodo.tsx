import { TodoWithCourse } from "@/app/validationSchemas";
import { Stack, Button, Text } from "@mantine/core";
import axios from "axios";
import React from "react";

// Props
interface Props {
  todo?: TodoWithCourse;
}

const DeleteTodo = ({ todo }: Props) => {
  // API call, DELETE requested todo
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/todos/${todo?.id}`);
      alert("Todo deleted successfully!");
      window.location.reload();
    } catch (error) {
      alert("Failed to delete todo.");
    }
  };
  return (
    <Stack>
      <Text ta="center">
        Are you sure you want to delete {todo?.title}? This action is
        irreversible.
      </Text>
      <Button onClick={handleDelete}>YES</Button>
    </Stack>
  );
};

export default DeleteTodo;
