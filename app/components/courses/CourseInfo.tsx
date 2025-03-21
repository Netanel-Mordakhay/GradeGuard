import {
  Group,
  Stack,
  Title,
  SemiCircleProgress,
  Text,
  Grid,
  GridCol,
  Center,
} from "@mantine/core";
import { Course } from "@/app/validationSchemas";
import { IconSchool } from "@tabler/icons-react";
import React, { ReactNode } from "react";

/* Props */
interface Props {
  course: Course;
  children: ReactNode;
}

const CourseInfo = ({ course, children }: Props) => {
  // Get children
  const [child1, child2] = React.Children.toArray(children);

  return (
    <Stack>
      {/* Delete / Edit buttons */}
      <Group justify="flex-end" mt={10} mb={-30}>
        {child1}
        {child2}
      </Group>
      <Grid w="100%" justify="space-between" align="center" grow my={10}>
        <GridCol span={{ base: 12, lg: 2 }} visibleFrom="xl" ta="center">
          <IconSchool size="80%" opacity={0.1} />
        </GridCol>
        <GridCol span={{ base: 12, lg: 6 }}>
          <Title size="xl">{course.title}</Title>
          <Group mt={10} opacity={0.8}>
            <Text>Grade: {course.grade || "Binary"}</Text>
            <Text>Credits: {course.credits || "-"}</Text>
            <Text>Year: {course.year || "-"}</Text>
            <Text>Semester: {course.semester || "-"}</Text>
          </Group>
        </GridCol>

        {/* Grade semi circle */}
        <GridCol span={{ base: 12, lg: 3 }}>
          <Center>
            {course.grade && (
              <SemiCircleProgress
                value={course.grade}
                transitionDuration={250}
                label={`${course.grade}/100`}
              />
            )}
          </Center>
        </GridCol>
      </Grid>
    </Stack>
  );
};

export default CourseInfo;
