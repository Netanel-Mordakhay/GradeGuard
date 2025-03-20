"use client";
import React from "react";
import { Accordion, ActionIcon, Box, Group } from "@mantine/core";
import classes from "../../styles/CourseTable.module.css";
import { Course } from "@/app/validationSchemas";
import { IconTrash } from "@tabler/icons-react";
import CourseInfo from "./CourseInfo";
import GradeBadge from "../global/GradeBadge";

const CoursesTable = ({ courses }: { courses: Course[] }) => {
  return (
    <Accordion variant="separated" classNames={classes}>
      {courses.map((course) => (
        <Accordion.Item key={course.id} value={String(course.id)}>
          <Accordion.Control>
            <Group justify="space-between" mr={10}>
              <Box>{course.title}</Box>
              <Box w={40} ta="center" visibleFrom="sm">
                {(course.grade && <GradeBadge grade={course.grade} />) || "-"}
              </Box>
            </Group>
          </Accordion.Control>
          <Accordion.Panel className="overlay-gradient">
            <CourseInfo course={course} />
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default CoursesTable;
