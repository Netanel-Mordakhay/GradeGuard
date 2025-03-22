"use client";

import {
  Button,
  Loader,
  Paper,
  Stack,
  Title,
  TextInput,
  Alert,
} from "@mantine/core";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateUserSchema, type UpdateUserForm } from "@/app/validationSchemas";
import { useState } from "react";

const EditProfileForm = ({
  defaultValues,
}: {
  defaultValues: UpdateUserForm;
}) => {
  const [serverError, setServerError] = useState("");
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<UpdateUserForm>({
    resolver: zodResolver(updateUserSchema),
    defaultValues,
  });

  const onSubmit = async (data: UpdateUserForm) => {
    setServerError("");
    setSuccess(false);

    const res = await fetch("/api/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
      if (result.error?.includes("Email")) {
        setError("email", { message: result.error });
      } else {
        setServerError(result.error || "Update failed");
      }
      return;
    }

    setSuccess(true);
  };

  return (
    <Stack>
      <Title my="md" size="xl">
        Edit Profile
      </Title>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          <TextInput
            label="First Name"
            placeholder="Enter your first name"
            {...register("firstName")}
            error={errors.firstName?.message}
            withAsterisk
          />

          <TextInput
            label="Last Name"
            placeholder="Enter your last name"
            {...register("lastName")}
            error={errors.lastName?.message}
            withAsterisk
          />

          <TextInput
            label="Email"
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            error={errors.email?.message}
            withAsterisk
          />

          {serverError && <Alert color="red">{serverError}</Alert>}
          {success && <Alert color="green">Profile updated successfully</Alert>}

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <Loader size="sm" color="white" />
            ) : (
              "Update Profile"
            )}
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default EditProfileForm;
