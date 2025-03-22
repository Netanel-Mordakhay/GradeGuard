"use client";

import {
  Button,
  Paper,
  Stack,
  Title,
  Alert,
  Divider,
  Loader,
  TextInput,
  PasswordInput,
} from "@mantine/core";
import { useForm } from "react-hook-form";
import { registerSchema, type RegisterForm } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import Logo from "@/app/components/global/Logo";
import Link from "next/link";
import { useState } from "react";

const RegisterForm = () => {
  const router = useRouter();
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterForm) => {
    setServerError("");
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (!res.ok) {
      if (result.error?.includes("Email already exists")) {
        setError("email", { message: result.error });
      } else {
        setServerError(result.error || "Registration failed");
      }
      return;
    }

    router.push("/login");
  };

  return (
    <Stack align="center" w="100%">
      <Logo large />
      <Paper
        withBorder
        shadow="md"
        p={30}
        radius="md"
        w={{ base: "100%", xs: 400 }}
      >
        <Title ta="center" mb="md" size="xl">
          Register
        </Title>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack>
            {/* First Name */}
            <TextInput
              label="First Name"
              placeholder="Enter your first name"
              withAsterisk
              {...register("firstName")}
              error={errors.firstName?.message}
            />

            {/* Last Name */}
            <TextInput
              label="Last Name"
              placeholder="Enter your last name"
              withAsterisk
              {...register("lastName")}
              error={errors.lastName?.message}
            />

            {/* Email */}
            <TextInput
              label="Email"
              placeholder="Enter your email"
              type="email"
              withAsterisk
              {...register("email")}
              error={errors.email?.message}
            />

            {/* Password */}
            <PasswordInput
              label="Password"
              placeholder="Enter your password"
              withAsterisk
              {...register("password")}
              error={errors.password?.message}
            />

            {/* Server Error */}
            {serverError && <Alert color="red">{serverError}</Alert>}

            {/* Submit */}
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? <Loader size="sm" color="white" /> : "Register"}
            </Button>
          </Stack>
        </form>

        <Divider my={20} />

        <Link href="/login" style={{ textDecoration: "none" }}>
          <Button fullWidth variant="outline">
            Already have an account? Login
          </Button>
        </Link>
      </Paper>
    </Stack>
  );
};

export default RegisterForm;
