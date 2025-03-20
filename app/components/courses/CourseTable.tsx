"use client";
import React from "react";
import { Accordion, ActionIcon, Box, Divider, Group } from "@mantine/core";
import classes from "../../styles/CourseTable.module.css";
import { Course } from "@/app/validationSchemas";
import CourseInfo from "./CourseInfo";
import { IconTrash, IconEdit } from "@tabler/icons-react";
import GradeBadge from "../global/GradeBadge";
import ModalButton from "../global/ModalButton";

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
            <CourseInfo course={course}>
              <ModalButton>
                <div>1</div>
                <IconEdit size={16} />
              </ModalButton>

              <ModalButton>
                <div>1</div>
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
