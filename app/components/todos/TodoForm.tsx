"use client";
import {
  Alert,
  Autocomplete,
  Button,
  Center,
  Input,
  InputWrapper,
  Loader,
  Select,
  Stack,
  Textarea,
} from "@mantine/core";
import { useForm } from "react-hook-form";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import {
  createTodoSchema,
  CreateTodoForm,
  Course,
  TodoWithCourse,
} from "@/app/validationSchemas";
import DefaultCard from "../global/DefaultCard";
import SuccessMessage from "../global/SuccessMessage";
import { normalizeTodoForForm } from "@/app/validationSchemas";
import { CATEGORY_OPTIONS, COLOR_OPTIONS } from "@/app/constants";

interface Props {
  courses: Course[];
  todo?: TodoWithCourse;
}

const TodoForm = ({ courses, todo }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<CreateTodoForm>({
    resolver: zodResolver(createTodoSchema),
    shouldUnregister: true,
    defaultValues: todo ? normalizeTodoForForm(todo) : {},
  });

  const [isSubmitting, setSubmitting] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      setSuccess(false);

      if (todo?.id) {
        await axios.put(`/api/todos/${todo.id}`, data);
      } else {
        await axios.post("/api/todos", data);
      }

      setSuccess(true);
      reset();
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error("Error submitting todo:", error);
    } finally {
      setSubmitting(false);
    }
  });

  return (
    <DefaultCard title="Add a new assignment">
      <form onSubmit={onSubmit}>
        <Stack>
          {/* Title */}
          <InputWrapper label="Title" withAsterisk>
            <Input placeholder="Title" {...register("title")} />
            {errors.title && <Alert mt={10}>{errors.title.message}</Alert>}
          </InputWrapper>

          {/* Description */}
          <InputWrapper label="Description">
            <Textarea
              placeholder="Description"
              resize="vertical"
              {...register("description")}
            />
            {errors.description && (
              <Alert mt={10}>{errors.description.message}</Alert>
            )}
          </InputWrapper>

          {/* Due Date */}
          <InputWrapper label="Due date">
            <Input
              type="date"
              {...register("dueDate", {
                setValueAs: (value) =>
                  value === "" ? undefined : new Date(value),
              })}
            />
            {errors.dueDate && <Alert mt={10}>{errors.dueDate.message}</Alert>}
          </InputWrapper>

          {/* Category */}
          <InputWrapper label="Category">
            <Select
              data={CATEGORY_OPTIONS}
              placeholder="Choose category"
              onChange={(value) =>
                setValue("category", value as CreateTodoForm["category"])
              }
              clearable
            />
          </InputWrapper>

          {/* Course selection */}
          <InputWrapper label="Course">
            <Select
              searchable
              data={courses.map((course) => ({
                label: course.title,
                value: String(course.id),
              }))}
              placeholder="Choose course"
              onChange={(value) =>
                setValue("courseId", value ? parseInt(value) : null)
              }
              clearable
            />
          </InputWrapper>

          {/* Importance */}
          <InputWrapper label="Importance (1-5)">
            <Select
              placeholder="Choose importance"
              data={[
                { value: "5", label: "5 - Very High" },
                { value: "4", label: "4 - High" },
                { value: "3", label: "3 - Medium" },
                { value: "2", label: "2 - Low" },
                { value: "1", label: "1 - Very Low" },
              ]}
              onChange={(value) =>
                setValue("importance", value ? parseInt(value) : null)
              }
              clearable
            />
            {errors.importance && (
              <Alert mt={10}>{errors.importance.message}</Alert>
            )}
          </InputWrapper>

          {/* Color */}
          <InputWrapper label="Color">
            <Select
              data={COLOR_OPTIONS}
              placeholder="Choose color"
              onChange={(value) =>
                setValue("color", value as CreateTodoForm["color"])
              }
              clearable
            />
          </InputWrapper>

          <Button type="submit" disabled={isSubmitting}>
            {todo ? "Update Assignment" : "Create Assignment"}
          </Button>
          {isSubmitting && (
            <Center>
              <Loader color="blue" type="dots" />
            </Center>
          )}
          {isSuccess && (
            <SuccessMessage>Assignment created successfully!</SuccessMessage>
          )}
        </Stack>
      </form>
    </DefaultCard>
  );
};

export default TodoForm;
