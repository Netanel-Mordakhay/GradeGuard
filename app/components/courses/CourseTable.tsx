"use client";
import React, { useState } from "react";
import {
  Accordion,
  Box,
  Group,
  SemiCircleProgress,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import classes from "../../styles/CourseTable.module.css";
import { Course } from "@/app/validationSchemas";

const CoursesTable = ({ courses }: { courses: Course[] }) => {
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
          <Accordion.Panel className="overlay-gradient">
            <Group justify="space-between">
              <Stack m={15}>
                <Title size="xl">{course.title}</Title>
                <Text>Grade: {course.grade}</Text>
                <Text>Credits: {course.credits}</Text>
              </Stack>
              {course.grade && (
                <SemiCircleProgress
                  value={course.grade}
                  transitionDuration={250}
                  label={`${course.grade}%`}
                />
              )}
            </Group>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default CoursesTable;
