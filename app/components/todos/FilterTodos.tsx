import { Group, Select, Stack, Text } from "@mantine/core";
import { Course } from "@/app/validationSchemas";
import React from "react";

interface Props {
  filters: {
    category: string;
    importance: string;
    courseId: number | "ALL";
  };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      category: string;
      importance: string;
      courseId: number | "ALL";
    }>
  >;
  courses: Course[];
}

const FilterTodos = ({ filters, setFilters, courses }: Props) => {
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
          value={filters.category}
          onChange={(value) =>
            setFilters((prev) => ({ ...prev, category: value! }))
          }
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
          value={filters.importance}
          onChange={(value) =>
            setFilters((prev) => ({ ...prev, importance: value! }))
          }
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
          value={filters.courseId.toString()}
          onChange={(value) =>
            setFilters((prev) => ({
              ...prev,
              courseId: value === "ALL" ? "ALL" : parseInt(value!),
            }))
          }
        />
      </Group>
    </Stack>
  );
};

export default FilterTodos;
