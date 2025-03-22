import { Card, CardSection, Group, Text } from "@mantine/core";
import { IconArrowBadgeRight } from "@tabler/icons-react";
import React, { ReactNode } from "react";

interface Props {
  title?: string;
  children: ReactNode;
}

const DefaultCard = ({ children, title }: Props) => {
  return (
    <Card withBorder shadow="sm" radius="md">
      {title && (
        <CardSection withBorder inheritPadding py="xs">
          <Group gap={5}>
            <IconArrowBadgeRight />
            <Text fw={500}>{title}</Text>
          </Group>
        </CardSection>
      )}

      <CardSection p="lg">{children}</CardSection>
    </Card>
  );
};

export default DefaultCard;
