import { Group, Select, Stack, Text } from "@mantine/core";
import { Course } from "@/app/validationSchemas";
import React from "react";
import { CATEGORY_OPTIONS, IMPORTANCE_LEVEL } from "@/app/constants";

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
      <Group justify="space-between" wrap="nowrap">
        <Text>Category:</Text>
        <Select
          data={[{ value: "ALL", label: "All" }, ...CATEGORY_OPTIONS]}
          value={filters.category}
          onChange={(value) =>
            setFilters((prev) => ({ ...prev, category: value! }))
          }
        />
      </Group>

      {/* Importance */}
      <Group justify="space-between" wrap="nowrap">
        <Text>Importance:</Text>
        <Select
          data={IMPORTANCE_LEVEL}
          value={filters.importance}
          onChange={(value) =>
            setFilters((prev) => ({ ...prev, importance: value! }))
          }
        />
      </Group>

      {/* Course */}
      <Group justify="space-between" wrap="nowrap">
        <Text>Course:</Text>
        <Select
          searchable
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
