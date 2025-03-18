import { Card, Text } from "@mantine/core";
import React, { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

const DefaultCard = ({ children, title }: Props) => {
  return (
    <Card withBorder shadow="sm" radius="md">
      <Card.Section withBorder inheritPadding py="xs">
        <Text fw={500}>{title}</Text>
      </Card.Section>

      <Card.Section p="lg">{children}</Card.Section>
    </Card>
  );
};

export default DefaultCard;
