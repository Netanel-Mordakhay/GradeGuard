import React, { ReactNode } from "react";
import { Anchor, Container, Paper, Text, Title } from "@mantine/core";

interface Props {
  children: ReactNode;
}

const AuthenticationLayout = ({ children }: Props) => {
  return (
    <Container size={420} my={40}>
      <Title ta="center">Welcome back!</Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Do not have an account yet?{" "}
        <Anchor size="sm" component="button">
          Create account
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        {children}
      </Paper>
    </Container>
  );
};

export default AuthenticationLayout;
