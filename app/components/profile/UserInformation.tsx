import { Stack, Image, Group, Text, Divider } from "@mantine/core";
import type { User } from "next-auth";
import React from "react";

interface Props {
  user: User;
}

const UserInformation = ({ user }: Props) => {
  const { email, firstName, lastName, avatar } = user;
  const fullname = `${firstName} ${lastName}`;

  return (
    <Stack gap={0} ta="center" justify="center" align="center">
      <Image
        src={`/images/avatars/${avatar || "avatar_1"}.webp`}
        radius="50%"
        w={150}
      />
      <Text fz="xl" fw={500}>
        {fullname}
      </Text>
      <Text fz="md" c="dimmed">
        {email}
      </Text>
    </Stack>
  );
};

export default UserInformation;
