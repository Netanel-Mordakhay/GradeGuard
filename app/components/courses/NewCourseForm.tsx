"use client";
import { Alert, Button, Input, InputWrapper, Stack, Text } from "@mantine/core";
import { useForm } from "react-hook-form";
import axios from "axios";
import React, { useState } from "react";

interface CourseForm {
  title: string;
  grade?: number;
}

const NewCourseForm = () => {
  const { register, handleSubmit } = useForm<CourseForm>();
  const [error, setError] = useState("");
  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        try {
          await axios.post("/api/courses", data);
          setError("");
        } catch (error) {
          setError("Whoops, looks like somethings wrong.");
        }
      })}
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
        {error && (
          <Alert variant="light" color="red">
            {error}
          </Alert>
        )}
      </Stack>
    </form>
  );
};

export default NewCourseForm;
