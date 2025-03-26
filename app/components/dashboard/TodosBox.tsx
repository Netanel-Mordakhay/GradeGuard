"use client";
import { Calendar } from "@mantine/dates";
import { TodoWithCourse } from "@/app/validationSchemas";
import { Center, Modal, Text, Stack, Divider, Button } from "@mantine/core";
import { isSameDay } from "date-fns";
import DefaultCard from "../global/DefaultCard";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import TodoInfo from "../todos/TodoInfo";
import Link from "next/link";

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
              <Stack key={todo.id}>
                <TodoInfo todo={todo} />
                <Divider />
              </Stack>
            ))
          ) : (
            <Text c="dimmed">No assignments.</Text>
          )}
          <Link href="/todos" style={{ textDecoration: "none" }}>
            <Button fullWidth>View all</Button>
          </Link>
        </Stack>
      </Modal>
    </DefaultCard>
  );
};

export default TodoCalendar;
