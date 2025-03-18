"use client";
import {
  Alert,
  Button,
  Input,
  InputWrapper,
  Loader,
  Stack,
  Text,
} from "@mantine/core";
import { useForm } from "react-hook-form";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import React, { useState } from "react";
import { createCourseSchema } from "@/app/validationSchemas";
import DefaultCard from "../global/DefaultCard";

type CourseForm = z.infer<typeof createCourseSchema>;

const NewCourseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CourseForm>({
    resolver: zodResolver(createCourseSchema),
  });

  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      await axios.post("/api/courses", data);
    } catch (error) {
    } finally {
      setSubmitting(false);
    }
  });

  return (
    <DefaultCard title="Add a new course">
      <form onSubmit={onSubmit}>
        <Stack>
          <InputWrapper label="Course title">
            <Input placeholder="title" {...register("title")} />
            {errors.title && <Alert mt={10}>Title error</Alert>}
          </InputWrapper>
          <InputWrapper label="Course grade" description="optional">
            <Input
              placeholder="0-100"
              type="number"
              {...register("grade", { valueAsNumber: true })}
            />
            {errors.grade && <Alert mt={10}>Grade error</Alert>}
          </InputWrapper>
          <Button type="submit" disabled={isSubmitting}>
            Create course
          </Button>
          {isSubmitting && <Loader color="blue" type="dots" />}
        </Stack>
      </form>
    </DefaultCard>
  );
};

export default NewCourseForm;
