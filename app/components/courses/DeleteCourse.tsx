import React from "react";
import { Course } from "@/app/validationSchemas";
import { Button, Stack, Text } from "@mantine/core";
import axios from "axios";

interface Props {
  course?: Course;
}

const DeleteCourse = ({ course }: Props) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`/api/courses/${course?.id}`);
      alert("Course deleted successfully!");
      window.location.reload();
    } catch (error) {
      alert("Failed to delete course.");
    }
  };

  return (
    <Stack>
      <Text ta="center">
        Are you sure you want to delete {course?.title}? This action is
        irreversible.
      </Text>
      <Button onClick={handleDelete}>YES</Button>
    </Stack>
  );
};

export default DeleteCourse;
