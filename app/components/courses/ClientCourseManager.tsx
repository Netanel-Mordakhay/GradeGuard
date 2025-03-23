"use client";
import React, { useMemo, useState } from "react";
import { Divider } from "@mantine/core";
import FilterCourses from "./FilterCourses";
import CoursesTable from "./CourseTable";
import { Course } from "@/app/validationSchemas";

const ClientCoursesManager = ({ courses }: { courses: Course[] }) => {
  const yearOrder = {
    FIRST: 1,
    SECOND: 2,
    THIRD: 3,
    FOURTH: 4,
    FIFTH: 5,
    SIXTH: 6,
  };

  const semesterOrder = {
    A: 1,
    B: 2,
    SUMMER: 3,
  };

  const sortedCourses = [...courses].sort((a, b) => {
    const yearA = a.year && yearOrder[a.year] ? yearOrder[a.year] : 0;
    const yearB = b.year && yearOrder[b.year] ? yearOrder[b.year] : 0;
    if (yearA !== yearB) return yearB - yearA;

    const semesterA =
      a.semester && semesterOrder[a.semester] ? semesterOrder[a.semester] : 0;
    const semesterB =
      b.semester && semesterOrder[b.semester] ? semesterOrder[b.semester] : 0;
    return semesterB - semesterA;
  });

  const lastCourse = sortedCourses[0];

  const [filters, setFilters] = useState({
    year: lastCourse?.year ?? "ALL",
    semester: lastCourse?.semester ?? "ALL",
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
      <Divider my="md" />
      <CoursesTable courses={filteredCourses} />
    </>
  );
};

export default ClientCoursesManager;
