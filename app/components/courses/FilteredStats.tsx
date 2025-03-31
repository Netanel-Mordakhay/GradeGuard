import React from "react";
import { Group, Text } from "@mantine/core";
import { Course } from "@/app/validationSchemas";

interface Props {
  courses: Course[];
}

const coursesAverage = (courses: Course[]) => {
  let totalCredits = 0;
  let weightedSum = 0;

  for (const course of courses) {
    if (!course.isBinary && course.grade != null) {
      totalCredits += course.credits;
      weightedSum += course.grade * course.credits;
    }
  }

  return totalCredits === 0 ? 0 : weightedSum / totalCredits;
};

const FilteredStats = ({ courses }: Props) => {
  if (courses.length === 0) return null;

  const average = coursesAverage(courses);

  return (
    <Group justify="space-between">
      <Text>Filtered average:</Text>
      <Text>{average.toFixed(2) || "-"}</Text>
    </Group>
  );
};

export default FilteredStats;
