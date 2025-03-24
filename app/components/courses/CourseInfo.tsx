import { Group, Stack, Text, RingProgress } from "@mantine/core";
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
      <Group justify="flex-end" mt={10} mb={-25}>
        {child1}
        {child2}
      </Group>
      <Group justify="space-between" wrap="nowrap">
        <div>
          <div>
            <Text className="text-lead text-lead-xl" mt="md">
              {course.grade || "Binary"}
            </Text>
            <Text className="text-label-xs">Course grade</Text>
          </div>
          <div>
            <Text className="text-lead text-lead-xl" mt="md">
              {course.credits}
            </Text>
            <Text fz="xs" c="dimmed">
              Credits
            </Text>
          </div>
          <Group mt="md">
            <div>
              <Text className="text-lead text-lead-md">
                {course.year || "-"}
              </Text>
              <Text className="text-label-xs">Year</Text>
            </div>
            <div>
              <Text className="text-lead text-lead-md">
                {course.semester || "-"}
              </Text>
              <Text className="text-label-xs">Semester</Text>
            </div>
          </Group>
        </div>

        {course.grade && (
          <RingProgress
            roundCaps
            thickness={12}
            size={150}
            sections={[{ value: course.grade, color: "blue" }]}
            label={
              <div>
                <Text ta="center" className="text-lead text-lead-lg">
                  {course.grade}
                </Text>
                <Text ta="center" className="text-label-xs">
                  /100
                </Text>
              </div>
            }
          />
        )}
      </Group>
    </Stack>
  );
};

export default CourseInfo;
