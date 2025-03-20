import React from "react";
import { Course } from "@/app/validationSchemas";
import { Text, Card, Group, Stack, Title } from "@mantine/core";
import { IconSchool } from "@tabler/icons-react";

const CourseInfo = ({ course }: { course: Course }) => {
  return (
    <Card className="overlay-gradient">
      <Group align="flex-start" wrap="wrap" gap={30}>
        <IconSchool opacity={0.3} size={60} />
        <Stack>
          <Title size="lg">{course.title}</Title>
          <Text>
            {course.isBinary === true
              ? "Binary course"
              : `Grade: ${course.grade}`}
          </Text>
          <Text>Credits: {course.credits}</Text>
        </Stack>
        <Stack>
          <div>123</div>
        </Stack>
      </Group>
    </Card>
  );
};

export default CourseInfo;
