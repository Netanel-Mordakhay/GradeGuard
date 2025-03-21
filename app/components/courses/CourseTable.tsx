"use client";
import React from "react";
import { Accordion, Text, Box, Group } from "@mantine/core";
import classes from "../../styles/CourseTable.module.css";
import { Course } from "@/app/validationSchemas";
import CourseInfo from "./CourseInfo";
import { IconTrash, IconEdit } from "@tabler/icons-react";
import GradeBadge from "../global/GradeBadge";
import ModalButton from "../global/ModalButton";
import NewCourse from "./CourseForm";
import DeleteCourse from "./DeleteCourse";

const CoursesTable = ({ courses }: { courses: Course[] }) => {
  // No courses
  if (courses.length === 0) {
    return (
      <Text ta="center">
        Whoops... looks like you don't have any courses yet.
      </Text>
    );
  }

  // Courses
  return (
    <Accordion variant="separated" classNames={classes}>
      {/* Map each course */}
      {courses.map((course) => (
        <Accordion.Item key={course.id} value={String(course.id)}>
          <Accordion.Control>
            <Group justify="space-between" mr={10}>
              <Box>{course.title}</Box>
              <Group>
                <Box w={45} ta="center" visibleFrom="sm">
                  {(course.grade && <GradeBadge grade={course.grade} />) || "-"}
                </Box>
              </Group>
            </Group>
          </Accordion.Control>
          <Accordion.Panel className="overlay-gradient">
            <CourseInfo course={course}>
              {/* Passed children, edit / delete modal buttons */}
              <ModalButton>
                <NewCourse course={course} />
                <IconEdit size={16} />
              </ModalButton>

              <ModalButton>
                <DeleteCourse course={course} />
                <IconTrash size={16} />
              </ModalButton>
            </CourseInfo>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default CoursesTable;
