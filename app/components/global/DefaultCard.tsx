import { Button, Card, CardSection, Group, Stack, Text } from "@mantine/core";
import { IconArrowBadgeRight } from "@tabler/icons-react";
import Link from "next/link";
import React, { ReactNode } from "react";

interface Props {
  title?: string;
  children: ReactNode;
  link?: string;
}

const DefaultCard = ({ children, title, link }: Props) => {
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
      <CardSection p="lg">
        <Stack>
          {children}
          {link && (
            <Link href={`/${link}`} style={{ textDecoration: "none" }}>
              <Button fullWidth radius="md" mt="md" variant="default">
                View All
              </Button>
            </Link>
          )}
        </Stack>
      </CardSection>
    </Card>
  );
};

export default DefaultCard;
