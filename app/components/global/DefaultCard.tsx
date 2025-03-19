import { Card, CardSection, Text } from "@mantine/core";
import React, { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

const DefaultCard = ({ children, title }: Props) => {
  return (
    <Card withBorder shadow="sm" radius="md">
      <CardSection withBorder inheritPadding py="xs">
        <Text fw={500}>{title}</Text>
      </CardSection>

      <CardSection p="lg">{children}</CardSection>
    </Card>
  );
};

export default DefaultCard;
