"use client";
import { Card, Avatar, Button, Text, CardSection } from "@mantine/core";
import type { User } from "next-auth";
import Link from "next/link";
import React from "react";

interface UserBoxProps {
  user: User;
}

const UserBox = ({ user }: UserBoxProps) => {
  const { email, firstName, lastName } = user;
  const fullname = `${firstName} ${lastName}`;

  return (
    <Card withBorder padding="md" radius="md">
      <CardSection
        h={140}
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80)",
        }}
      />
      <Avatar
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"
        size={80}
        radius={80}
        mx="auto"
        mt={-30}
      />
      <Text ta="center" fz="lg" fw={500} mt="sm">
        {fullname}
      </Text>
      <Text ta="center" fz="sm" c="dimmed">
        {email}
      </Text>
      <Link href="/profile" style={{ textDecoration: "none" }}>
        <Button fullWidth radius="md" mt="md" variant="default">
          View Profile
        </Button>
      </Link>
    </Card>
  );
};

export default UserBox;
