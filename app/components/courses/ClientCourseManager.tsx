"use client";
import React, { useMemo, useState } from "react";
import { Divider } from "@mantine/core";
import FilterCourses from "./FilterCourses";
import CoursesTable from "./CourseTable";
import { Course } from "@/app/validationSchemas";
import FilteredStats from "./FilteredStats";

const ClientCoursesManager = ({
  courses,
  defaultFilters,
}: {
  courses: Course[];
  defaultFilters: { year: string; semester: string } | null;
}) => {
  const [filters, setFilters] = useState({
    year: defaultFilters?.year ?? "ALL",
    semester: defaultFilters?.semester ?? "ALL",
  });

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchYear =
        filters.year === "ALL" || String(course.year) === filters.year;
      const matchSemester =
        filters.semester === "ALL" || course.semester === filters.semester;
      return matchYear && matchSemester;
    });
  }, [courses, filters]);

  return (
    <>
      <FilterCourses filters={filters} setFilters={setFilters} />
      <FilteredStats courses={filteredCourses} />
      <Divider my="md" />
      <CoursesTable courses={filteredCourses} />
    </>
  );
};

export default ClientCoursesManager;
