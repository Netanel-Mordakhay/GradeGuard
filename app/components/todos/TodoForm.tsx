"use client";
import {
  Alert,
  Button,
  Center,
  Input,
  InputWrapper,
  Loader,
  Select,
  Stack,
} from "@mantine/core";
import { useForm } from "react-hook-form";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { createTodoSchema, CreateTodoForm } from "@/app/validationSchemas";
import DefaultCard from "../global/DefaultCard";
import SuccessMessage from "../global/SuccessMessage";
import { CATEGORY_OPTIONS, COLOR_OPTIONS } from "@/app/constants";

const TodoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<CreateTodoForm>({
    resolver: zodResolver(createTodoSchema),
    shouldUnregister: true,
  });

  const [isSubmitting, setSubmitting] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      setSuccess(false);

      await axios.post("/api/todos", data);

      setSuccess(true);
      reset();
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error("Error creating todo:", error);
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
            <Input placeholder="Description" {...register("description")} />
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

          {/* Importance */}
          <InputWrapper label="Importance (1-5)">
            <Input
              type="number"
              placeholder="1-5"
              {...register("importance", {
                setValueAs: (value) => (value === "" ? null : Number(value)),
              })}
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
            Create Assignment
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
