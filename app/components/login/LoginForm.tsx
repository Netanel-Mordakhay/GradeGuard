"use client";

import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  Button,
  Input,
  InputWrapper,
  Loader,
  Paper,
  Stack,
  Title,
  Alert,
  Divider,
} from "@mantine/core";
import { loginSchema, type LoginForm } from "@/app/validationSchemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Logo from "@/app/components/global/Logo";
import Link from "next/link";

const LoginForm = () => {
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
    <Stack align="center" w="100%">
      <Logo large={true} />
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
        <Divider my={20} />
        <Link href="/register" style={{ textDecoration: "none" }}>
          <Button fullWidth>Register</Button>
        </Link>
      </Paper>
    </Stack>
  );
};

export default LoginForm;
