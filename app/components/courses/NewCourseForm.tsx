"use client";
import { Alert, Button, Input, InputWrapper, Stack, Text } from "@mantine/core";
import { useForm } from "react-hook-form";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import React, { useState } from "react";
import { createCourseSchema } from "@/app/validationSchemas";

type CourseForm = z.infer<typeof createCourseSchema>;

const NewCourseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CourseForm>({
    resolver: zodResolver(createCourseSchema),
  });
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
          {errors.title && (
            <Alert variant="light" color="red">
              Title error
            </Alert>
          )}
        </InputWrapper>
        <InputWrapper label="Course grade" description="optional">
          <Input
            placeholder="0-100"
            type="number"
            {...register("grade", { valueAsNumber: true })}
          />
          {errors.grade && (
            <Alert variant="light" color="red">
              Grade error
            </Alert>
          )}
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
