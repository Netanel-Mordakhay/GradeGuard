"use client";
import React from "react";
import { Group, SegmentedControl, Stack, Text } from "@mantine/core";

type Filters = {
  year: string;
  semester: string;
};

const FilterCourses = ({
  filters,
  setFilters,
}: {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}) => {
  return (
    <Stack>
      <Group justify="space-between">
        <Text>Year:</Text>
        <SegmentedControl
          value={filters.year}
          onChange={(val) =>
            setFilters((prev: Filters) => ({ ...prev, year: val }))
          }
          fullWidth
          data={[
            { label: "All", value: "ALL" },
            { label: "1", value: "FIRST" },
            { label: "2", value: "SECOND" },
            { label: "3", value: "THIRD" },
            { label: "4", value: "FOURTH" },
            { label: "5", value: "FIFTH" },
            { label: "6", value: "SIXTH" },
          ]}
        />
      </Group>
      <Group justify="space-between">
        <Text>Semester:</Text>
        <SegmentedControl
          value={filters.semester}
          onChange={(val) =>
            setFilters((prev: Filters) => ({ ...prev, semester: val }))
          }
          fullWidth
          data={[
            { label: "All", value: "ALL" },
            { label: "A", value: "A" },
            { label: "B", value: "B" },
            { label: "Summer", value: "SUMMER" },
          ]}
        />
      </Group>
    </Stack>
  );
};

export default FilterCourses;
