"use client";
import { Calendar } from "@mantine/dates";
import { TodoWithCourse } from "@/app/validationSchemas";
import { Badge } from "@mantine/core";
import { isSameDay } from "date-fns";
import DefaultCard from "../global/DefaultCard";

interface Props {
  todos: TodoWithCourse[];
}

const TodoCalendar = ({ todos }: Props) => {
  const dueDates = todos
    .filter((todo) => todo.dueDate)
    .map((todo) => new Date(todo.dueDate!));

  return (
    <DefaultCard
      title="Assignments Calendar"
      link="todos"
      linkText="View All Assignments"
    >
      <Calendar
        highlightToday
        onChange={(date) => console.log("Selected date:", date)}
        getDayProps={(date) => {
          const hasTodo = dueDates.some((d) => isSameDay(d, date));
          return hasTodo ? { selected: true } : {};
        }}
      />
    </DefaultCard>
  );
};

export default TodoCalendar;
