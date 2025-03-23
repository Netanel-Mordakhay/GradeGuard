"use client";
import React from "react";
import { useState } from "react";
import { Group, SegmentedControl, Stack, Text } from "@mantine/core";

const FilterCourses = () => {
  const [yearValue, setYearValue] = useState("ALL");
  const [semesterValue, setSemesterValue] = useState("ALL");

  return (
    <Stack>
      <Group justify="space-between">
        <Text>Year:</Text>
        <SegmentedControl
          value={yearValue}
          onChange={setYearValue}
          fullWidth
          data={[
            { label: "All", value: "ALL" },
            { label: "1", value: "FIRST" },
            { label: "2", value: "SECOND" },
            { label: "3", value: "THIRD" },
            { label: "4", value: "FOURTH" },
            { label: "5", value: "FIFTH" },
            { label: "6", value: "SIXTH" },
            { label: "7", value: "SEVENTH" },
          ]}
        />
      </Group>
      <Group justify="space-between">
        <Text>Semester:</Text>
        <SegmentedControl
          value={semesterValue}
          onChange={setSemesterValue}
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
