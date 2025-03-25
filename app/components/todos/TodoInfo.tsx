import { TodoWithCourse } from "@/app/validationSchemas";
import { Stack, Group, RingProgress, Text, Box } from "@mantine/core";
import React, { ReactNode } from "react";

/* Props */
interface Props {
  todo: TodoWithCourse;
  children: ReactNode;
}

const TodoInfo = ({ todo, children }: Props) => {
  // Get children
  const [child1, child2] = React.Children.toArray(children);
  return (
    <Stack>
      {/* Delete / Edit buttons */}
      <Group justify="flex-end" mt={10} mb={-25}>
        {child1}
        {child2}
      </Group>
      <Stack>
        {/* Left side */}
        <Box w="100%">
          {/* Category */}
          <div>
            <Text className="text-lead text-lead-xl" mt="md">
              {todo.category || "-"}
            </Text>
            <Text className="text-label-xs">Category</Text>
          </div>
          {/* Date */}
          <div>
            <Text className="text-lead text-lead-xl" mt="md">
              {todo.dueDate
                ? new Date(todo.dueDate).toLocaleDateString("he-IL")
                : "-"}
            </Text>
            <Text fz="xs" c="dimmed">
              Due date
            </Text>
          </div>
          <Group mt="md">
            <div>
              <Text className="text-lead text-lead-md">
                {todo.course?.title || "-"}
              </Text>
              <Text className="text-label-xs">Course</Text>
            </div>
            <div>
              <Text className="text-lead text-lead-md">
                {todo.importance ? `${todo.importance}/5` : "-"}
              </Text>
              <Text className="text-label-xs">Importance</Text>
            </div>
          </Group>
        </Box>
        <div>
          <div>
            <Text className="text-lead text-lead-md">
              {todo.description || "-"}
            </Text>
            <Text className="text-label-xs">Description</Text>
          </div>
        </div>
        {/* Right side */}
      </Stack>
    </Stack>
  );
};

export default TodoInfo;
