"use client";

import {
  Button,
  Loader,
  Image,
  Stack,
  Title,
  TextInput,
  Alert,
  Box,
  Group,
} from "@mantine/core";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateUserSchema, type UpdateUserForm } from "@/app/validationSchemas";
import { AVATAR_OPTIONS } from "../../constants";
import { useState } from "react";
import { useSession } from "next-auth/react";

const EditProfileForm = ({
  defaultValues,
}: {
  defaultValues: UpdateUserForm;
}) => {
  const [serverError, setServerError] = useState("");
  const [success, setSuccess] = useState(false);

  const { update } = useSession(); // ✅ כאן מותר להשתמש ב-hook

  const {
    register,
    handleSubmit,
    setError,
    setValue,
    watch,
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
    await update();
    window.location.reload();
  };

  return (
    <Stack>
      <Title my="md" size="xl">
        Edit Profile
      </Title>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack>
          {/* First name */}
          <TextInput
            label="First Name"
            placeholder="Enter your first name"
            {...register("firstName")}
            error={errors.firstName?.message}
            withAsterisk
          />

          {/* Last name */}
          <TextInput
            label="Last Name"
            placeholder="Enter your last name"
            {...register("lastName")}
            error={errors.lastName?.message}
            withAsterisk
          />

          {/* Email */}
          <TextInput
            label="Email"
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            error={errors.email?.message}
            withAsterisk
          />

          {/* Avatar */}
          <Title order={5}>Choose your avatar</Title>
          <Group justify="center">
            {AVATAR_OPTIONS.map((avatar) => (
              <Box
                key={avatar.id}
                style={{
                  border:
                    watch("avatar") === avatar.id
                      ? "2px solid gray"
                      : "2px solid transparent",
                  borderRadius: "50%",
                  cursor: "pointer",
                  padding: 3,
                }}
                onClick={() => {
                  setValue("avatar", avatar.id);
                }}
              >
                <Image
                  src={avatar.src}
                  alt={avatar.id}
                  width={60}
                  height={60}
                  radius="50%"
                />
              </Box>
            ))}
          </Group>

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
