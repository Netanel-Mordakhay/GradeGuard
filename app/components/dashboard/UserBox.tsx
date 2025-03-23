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
  const { email, firstName, lastName, avatar } = user;
  const fullname = `${firstName} ${lastName}`;
  console.log(avatar);

  return (
    <DefaultCard showCover={true} link="profile" linkText="Edit Profile">
      <Avatar
        src={`/images/avatars/${avatar || "avatar_1"}.webp`}
        size={120}
        radius="50%"
        mx="auto"
        mt={-90}
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
