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
} from "@mantine/core";
import LogoSmall from "@/app/components/global/LogoSmall";

const LoginPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
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
    <Center className="min-h-screen">
      <Paper withBorder shadow="md" p={30} radius="md" w={400}>
        <Title ta="center" mb="md">
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
                {...register("password", { required: "Password is required" })}
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
    </Center>
  );
};

export default LoginPage;
