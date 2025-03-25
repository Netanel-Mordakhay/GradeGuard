import { Group, Select, Stack, Text } from "@mantine/core";
import { Course } from "@/app/validationSchemas";
import React from "react";

interface Props {
  category: string;
  setCategory: (value: string) => void;
  importance: string;
  setImportance: (value: string) => void;
  courseId: number | "ALL";
  setCourseId: (value: number | "ALL") => void;
  courses: Course[];
}

const FilterTodos = ({
  category,
  setCategory,
  importance,
  setImportance,
  courseId,
  setCourseId,
  courses,
}: Props) => {
  return (
    <Stack>
      {/* Category */}
      <Group justify="space-between">
        <Text>Category:</Text>
        <Select
          data={[
            { value: "ALL", label: "All" },
            { value: "GENERAL", label: "General" },
            { value: "HOMEWORK", label: "Homework" },
            { value: "TEST", label: "Test" },
          ]}
          value={category}
          onChange={(value) => setCategory(value!)}
        />
      </Group>

      {/* Importance */}
      <Group justify="space-between">
        <Text>Importance:</Text>
        <Select
          data={[
            { value: "ALL", label: "All" },
            { value: "5", label: "5 - Very High" },
            { value: "4", label: "4 - High" },
            { value: "3", label: "3 - Medium" },
            { value: "2", label: "2 - Low" },
            { value: "1", label: "1 - Very Low" },
          ]}
          value={importance}
          onChange={(value) => setImportance(value!)}
        />
      </Group>

      {/* Course */}
      <Group justify="space-between">
        <Text>Course:</Text>
        <Select
          data={[
            { value: "ALL", label: "All" },
            ...courses.map((c) => ({
              value: c.id.toString(),
              label: c.title,
            })),
          ]}
          value={courseId.toString()}
          onChange={(value) =>
            setCourseId(value === "ALL" ? "ALL" : parseInt(value!))
          }
        />
      </Group>
    </Stack>
  );
};

export default FilterTodos;
