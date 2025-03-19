"use client";
import React, { useState } from "react";
import {
  Box,
  Collapse,
  Table,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
  Text,
} from "@mantine/core";
import { IconArrowDown, IconArrowRight } from "@tabler/icons-react";
import { Course } from "@/app/validationSchemas";

const CoursesTable = ({ courses }: { courses: Course[] }) => {
  const [openCourseId, setOpenCourseId] = useState<number | null>(null);

  const toggleCollapse = (courseId: number) => {
    setOpenCourseId((prevId) => (prevId === courseId ? null : courseId));
  };

  return (
    <Table striped highlightOnHover>
      <TableThead>
        <TableTr>
          <TableTh>Course</TableTh>
          <TableTh visibleFrom="md" w={50}>
            Grade
          </TableTh>
          <TableTh w={30}></TableTh>
        </TableTr>
      </TableThead>
      <TableTbody>
        {courses.map((course) => (
          <React.Fragment key={course.id}>
            {/* Course Row */}
            <TableTr onClick={() => toggleCollapse(course.id)}>
              <TableTd>
                {course.title}
                <Box hiddenFrom="md">grade: {course.grade ?? "-"}</Box>
              </TableTd>
              <TableTd visibleFrom="md">{course.grade ?? "-"}</TableTd>
              <TableTd>
                {openCourseId === course.id ? (
                  <IconArrowDown size={20} opacity={0.5} />
                ) : (
                  <IconArrowRight size={20} opacity={0.5} />
                )}
              </TableTd>
            </TableTr>

            {/* Course Collapse */}
            {/* NEED TO CHANGE IT - DIV CANT BE INSIDE TBODY */}
            <Collapse in={openCourseId === course.id}>
              <Box p="md">
                <Text>Grade: {course.grade ?? "N/A"}</Text>
                <Text>TO-BE-FILLED-LATER</Text>
              </Box>
            </Collapse>
          </React.Fragment>
        ))}
      </TableTbody>
    </Table>
  );
};

export default CoursesTable;
