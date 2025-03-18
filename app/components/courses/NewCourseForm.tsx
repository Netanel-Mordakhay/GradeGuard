"use client";
import { Button, Input, InputWrapper, Stack } from "@mantine/core";
import { useForm } from "react-hook-form";
import axios from "axios";
import React from "react";

interface CourseForm {
  title: string;
  grade: number;
}

const NewCourseForm = () => {
  const { register, handleSubmit } = useForm<CourseForm>();
  return (
    <form
      onSubmit={handleSubmit(
        async (data) => await axios.post("/api/courses", data)
      )}
    >
      <Stack>
        <InputWrapper label="Course title">
          <Input placeholder="title" {...register("title")} />
        </InputWrapper>
        <InputWrapper label="Course grade" description="optional">
          <Input
            placeholder="0-100"
            type="number"
            {...register("grade", { valueAsNumber: true })}
          />
        </InputWrapper>
        <Button type="submit">Create course</Button>
      </Stack>
    </form>
  );
};

export default NewCourseForm;
