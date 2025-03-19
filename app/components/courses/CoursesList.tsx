import prisma from "@/prisma/client";
import React from "react";
import DefaultCard from "../global/DefaultCard";
import {
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
            <TableTh>Course title</TableTh>
            <TableTh>Grade</TableTh>
          </TableTr>
        </TableThead>
        <TableTbody>
          {courses.map((course) => (
            <TableTr key={course.id}>
              <TableTd>{course.title}</TableTd>
              <TableTd>{course.grade || "-"}</TableTd>
            </TableTr>
          ))}
        </TableTbody>
      </Table>
    </DefaultCard>
  );
};

export default CoursesList;
