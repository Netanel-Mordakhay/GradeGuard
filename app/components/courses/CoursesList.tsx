import prisma from "@/prisma/client";
import React from "react";
import DefaultCard from "../global/DefaultCard";
import {
  Box,
  Table,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
} from "@mantine/core";

const CoursesList = async () => {
  const courses = await prisma.course.findMany();

  return (
    <DefaultCard title="My Courses">
      <Table striped highlightOnHover>
        <TableThead>
          <TableTr>
            <TableTh>Course</TableTh>
            <TableTh visibleFrom="md">Grade</TableTh>
          </TableTr>
        </TableThead>
        <TableTbody>
          {courses.map((course) => (
            <TableTr key={course.id}>
              <TableTd>
                {course.title}
                <Box hiddenFrom="md">grade: {course.grade || "-"}</Box>
              </TableTd>
              <TableTd visibleFrom="md">{course.grade || "-"}</TableTd>
            </TableTr>
          ))}
        </TableTbody>
      </Table>
    </DefaultCard>
  );
};

export default CoursesList;
