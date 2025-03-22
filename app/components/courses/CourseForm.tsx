"use client";
import {
  Alert,
  Button,
  Center,
  Checkbox,
  Divider,
  Input,
  InputWrapper,
  Loader,
  Select,
  Stack,
} from "@mantine/core";
import { useForm } from "react-hook-form";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { createCourseSchema } from "@/app/validationSchemas";
import DefaultCard from "../global/DefaultCard";
import SuccessMessage from "../global/SuccessMessage";
import { CourseForm, Course } from "@/app/validationSchemas";
import { YEAR_OPTIONS, SEMESTER_OPTIONS } from "../../constants";

// Allows an input for a course in case we edit
interface Props {
  course?: Course;
}

const CourseFormComponent = ({ course }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<CourseForm>({
    resolver: zodResolver(createCourseSchema),
    shouldUnregister: true,
    defaultValues: course || {}, // Deafult values if currently editing (PUT)
  });

  const [isSubmitting, setSubmitting] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isBinary, setIsBinary] = useState(course?.isBinary || false);

  useEffect(() => {
    if (course) {
      reset(course);
    }
  }, [course, reset]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      setSuccess(false);

      if (course?.id) {
        // Edit
        await axios.put(`/api/courses/${course.id}`, data);
      } else {
        // Create new
        await axios.post("/api/courses", data);
      }

      setSuccess(true);
      reset();
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.error("Error submitting course:", error);
    } finally {
      setSubmitting(false);
    }
  });

  return (
    <DefaultCard title={course ? "Edit Course" : "Add a new course"}>
      <form onSubmit={onSubmit}>
        <Stack>
          {/* Title */}
          <InputWrapper label="Course title" withAsterisk>
            <Input placeholder="title" {...register("title")} />
            {errors.title && <Alert mt={10}>{errors.title.message}</Alert>}
          </InputWrapper>

          {/* Grade */}
          <InputWrapper label="Course grade">
            <Input
              placeholder="0-100"
              type="number"
              disabled={isBinary}
              {...register("grade", {
                setValueAs: (value) =>
                  value === "" ? undefined : Number(value),
              })}
            />
            {errors.grade && <Alert mt={10}>{errors.grade.message}</Alert>}
          </InputWrapper>

          {/* Binary */}
          <Checkbox
            label="Binary grade"
            checked={isBinary}
            onChange={(event) => {
              setIsBinary(event.currentTarget.checked);
              if (event.currentTarget.checked) {
                setValue("grade", undefined);
              }
            }}
          />

          {/* Credits */}
          <InputWrapper label="Course credits">
            <Input
              placeholder="0-100"
              type="number"
              step={0.1}
              {...register("credits", {
                setValueAs: (value) =>
                  value === "" ? undefined : Number(value),
              })}
            />
            {errors.credits && <Alert mt={10}>{errors.credits.message}</Alert>}
          </InputWrapper>

          {/* Year Selection */}
          <InputWrapper label="Year">
            <Select
              placeholder="Choose a year"
              data={YEAR_OPTIONS}
              {...register("year")}
              onChange={(value) =>
                setValue("year", value ? (value as CourseForm["year"]) : null)
              }
              clearable
            />
          </InputWrapper>

          {/* Semester Selection */}
          <InputWrapper label="Semester">
            <Select
              placeholder="Choose a semester"
              data={SEMESTER_OPTIONS}
              {...register("semester")}
              onChange={(value) =>
                setValue(
                  "semester",
                  value ? (value as CourseForm["semester"]) : null
                )
              }
              clearable
            />
          </InputWrapper>

          {/* Submit */}
          <Button type="submit" disabled={isSubmitting}>
            {course ? "Update Course" : "Create Course"}
          </Button>
          {isSubmitting && (
            <Center>
              <Loader color="blue" type="dots" />
            </Center>
          )}
          {isSuccess && (
            <SuccessMessage>
              {course
                ? "Course updated successfully!"
                : "Course created successfully!"}
            </SuccessMessage>
          )}
        </Stack>
      </form>
    </DefaultCard>
  );
};

export default CourseFormComponent;
