"use client";
import React, { useState } from "react";
import {
  Accordion,
  Box,
  Collapse,
  Group,
  Table,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
  Text,
} from "@mantine/core";
import classes from "../../styles/CourseTable.module.css";
import { Course } from "@/app/validationSchemas";
import CourseInfo from "./CourseInfo";

const CoursesTable = ({ courses }: { courses: Course[] }) => {
  const [openCourseId, setOpenCourseId] = useState<number | null>(null);

  const toggleCollapse = (courseId: number) => {
    setOpenCourseId((prevId) => (prevId === courseId ? null : courseId));
  };

  return (
    <Accordion variant="separated" classNames={classes}>
      {courses.map((course) => (
        <Accordion.Item key={course.id} value={String(course.id)}>
          <Accordion.Control>
            <Group justify="space-between" mr={10}>
              <Box>{course.title}</Box>
              <Box w={20} ta="center" visibleFrom="sm">
                {course.grade || "-"}
              </Box>
            </Group>
          </Accordion.Control>
          <Accordion.Panel>
            <CourseInfo course={course} />
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default CoursesTable;
