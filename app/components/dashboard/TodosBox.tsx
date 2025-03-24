"use client";
import { Calendar } from "@mantine/dates";
import { TodoWithCourse } from "@/app/validationSchemas";
import { Center, Modal, Text, Stack } from "@mantine/core";
import { isSameDay } from "date-fns";
import DefaultCard from "../global/DefaultCard";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";

interface Props {
  todos: TodoWithCourse[];
}

const TodoCalendar = ({ todos }: Props) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [opened, { open, close }] = useDisclosure(false);

  const dueDates = todos
    .filter((todo) => todo.dueDate)
    .map((todo) => new Date(todo.dueDate!));

  const handleSelect = (date: Date) => {
    setSelectedDate(date);
    open();
  };

  const todosForSelected = todos.filter(
    (todo) =>
      selectedDate &&
      todo.dueDate &&
      isSameDay(new Date(todo.dueDate), selectedDate)
  );

  return (
    <DefaultCard
      title="Assignments Calendar"
      link="todos"
      linkText="View All Assignments"
    >
      <Center dir="ltr">
        <Calendar
          size="sm"
          highlightToday
          getDayProps={(date) => ({
            selected: dueDates.some((d) => isSameDay(d, date)),
            onClick: () => handleSelect(date),
          })}
        />
      </Center>

      {/* Modal for clicked date */}
      <Modal
        opened={opened}
        onClose={close}
        title={
          selectedDate
            ? `Assignments on ${selectedDate.toLocaleDateString()}`
            : "Assignments"
        }
        centered
      >
        <Stack>
          {todosForSelected.length > 0 ? (
            todosForSelected.map((todo) => (
              <Text key={todo.id}>• {todo.title}</Text>
            ))
          ) : (
            <Text c="dimmed">None</Text>
          )}
        </Stack>
      </Modal>
    </DefaultCard>
  );
};

export default TodoCalendar;
