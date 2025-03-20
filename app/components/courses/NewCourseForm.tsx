"use client";
import {
  Alert,
  Button,
  Center,
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
import SuccessMessage from "../global/SuccessMessage";
import { CourseForm } from "@/app/validationSchemas";

//type CourseForm = z.infer<typeof createCourseSchema>;

const NewCourseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CourseForm>({
    resolver: zodResolver(createCourseSchema),
    shouldUnregister: true,
  });

  const [isSubmitting, setSubmitting] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      setSuccess(false);
      await axios.post("/api/courses", data);
      setSuccess(true);
      reset();
    } catch (error) {
    } finally {
      setSubmitting(false);
    }
  });

  return (
    <DefaultCard title="Add a new course">
      <form onSubmit={onSubmit}>
        <Stack>
          {/* Title */}
          <InputWrapper label="Course title">
            <Input placeholder="title" {...register("title")} />
            {errors.title && <Alert mt={10}>{errors.title.message}</Alert>}
          </InputWrapper>

          {/* Grade */}
          <InputWrapper label="Course grade" description="optional">
            <Input
              placeholder="0-100"
              type="number"
              {...register("grade", {
                setValueAs: (value) =>
                  value === "" ? undefined : Number(value),
              })}
            />
            {errors.grade && <Alert mt={10}>{errors.grade.message}</Alert>}
          </InputWrapper>

          {/* Credits */}
          <InputWrapper label="Course credits" description="optional">
            <Input
              placeholder="0-100"
              type="number"
              {...register("credits", {
                setValueAs: (value) =>
                  value === "" ? undefined : Number(value),
              })}
            />
            {errors.credits && <Alert mt={10}>{errors.credits.message}</Alert>}
          </InputWrapper>

          {/* Submit */}
          <Button type="submit" disabled={isSubmitting}>
            Create course
          </Button>
          {isSubmitting && (
            <Center>
              <Loader color="blue" type="dots" />
            </Center>
          )}
          {isSuccess && (
            <SuccessMessage>
              Course has been successfully created!
            </SuccessMessage>
          )}
        </Stack>
      </form>
    </DefaultCard>
  );
};

export default NewCourseForm;
