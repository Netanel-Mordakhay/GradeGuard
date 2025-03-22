"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  Button,
  Center,
  Input,
  InputWrapper,
  Loader,
  Paper,
  Stack,
  Title,
  Alert,
  Grid,
  GridCol,
  Box,
  Group,
} from "@mantine/core";
import { loginSchema, type LoginForm } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Logo from "@/app/components/global/Logo";

const LoginPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (res?.error) {
      setError("email", { message: "Invalid credentials" });
      return;
    }

    router.push("/");
  };

  return (
    <Group justify="center" h="80svh">
      <div>123</div>
      <Stack align="center">
        <Logo large={true} />
        <Paper withBorder shadow="md" p={30} radius="md" w={400}>
          <Title ta="center" mb="md" size="xl">
            Login
          </Title>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack>
              {/* Email */}
              <InputWrapper label="Email" withAsterisk>
                <Input
                  placeholder="Enter your email"
                  type="email"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && <Alert mt={10}>{errors.email.message}</Alert>}
              </InputWrapper>

              {/* Password */}
              <InputWrapper label="Password" withAsterisk>
                <Input
                  placeholder="Enter your password"
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <Alert mt={10}>{errors.password.message}</Alert>
                )}
              </InputWrapper>

              {/* Submit */}
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? <Loader size="sm" color="white" /> : "Login"}
              </Button>
            </Stack>
          </form>
        </Paper>
      </Stack>
    </Group>
  );
};

export default LoginPage;
