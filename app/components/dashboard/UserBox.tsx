"use client";
import { Card, Avatar, Button, Text, CardSection, Stack } from "@mantine/core";
import type { User } from "next-auth";
import Link from "next/link";
import React from "react";
import DefaultCard from "../global/DefaultCard";

interface UserBoxProps {
  user: User;
}

const UserBox = ({ user }: UserBoxProps) => {
  const { email, firstName, lastName } = user;
  const fullname = `${firstName} ${lastName}`;

  return (
    <DefaultCard showCover={true} link="profile" linkText="View Profile">
      <Avatar
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"
        size={80}
        radius={80}
        mx="auto"
        mt={-60}
      />
      <Stack gap={0}>
        <Text ta="center" fz="lg" fw={500}>
          {fullname}
        </Text>
        <Text ta="center" fz="sm" c="dimmed">
          {email}
        </Text>
      </Stack>
    </DefaultCard>
  );
};

export default UserBox;
