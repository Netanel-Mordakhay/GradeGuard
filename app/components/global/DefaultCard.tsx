import { Button, Card, CardSection, Group, Stack, Text } from "@mantine/core";
import { IconArrowBadgeRight } from "@tabler/icons-react";
import Link from "next/link";
import React, { ReactNode } from "react";

interface Props {
  title?: string;
  children: ReactNode;
  link?: string;
  linkText?: string;
  showCover?: boolean;
}

const DefaultCard = ({ children, title, link, linkText, showCover }: Props) => {
  return (
    <Card withBorder shadow="sm" radius="md">
      {showCover && (
        <CardSection
          h={120}
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80)",
          }}
        />
      )}
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
              <Button fullWidth radius="md" variant="default">
                {linkText ? linkText : "View All"}
              </Button>
            </Link>
          )}
        </Stack>
      </CardSection>
    </Card>
  );
};

export default DefaultCard;
