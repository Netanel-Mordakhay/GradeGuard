"use client";

import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  Button,
  Loader,
  Paper,
  Stack,
  Title,
  Divider,
  TextInput,
  PasswordInput,
  Alert,
} from "@mantine/core";
import { loginSchema, type LoginForm } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Logo from "@/app/components/global/Logo";
import Link from "next/link";
import { useState } from "react";

const LoginForm = () => {
  const router = useRouter();
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    setServerError("");
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
          Login
        </Title>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack>
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

            {/* Server error (e.g. invalid credentials) */}
            {serverError && <Alert color="red">{serverError}</Alert>}

            {/* Submit */}
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? <Loader size="sm" color="white" /> : "Login"}
            </Button>
          </Stack>
        </form>

        <Divider my={20} />

        <Link href="/register" style={{ textDecoration: "none" }}>
          <Button fullWidth variant="outline">
            Register
          </Button>
        </Link>
      </Paper>
    </Stack>
  );
};

export default LoginForm;
