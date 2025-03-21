import { Stack, Image, Title, Text, Button } from "@mantine/core";
import React from "react";
import Link from "next/link";
import LogoSmall from "./components/global/LogoSmall";

const NotFoundPage = () => {
  return (
    <Stack h="90svh" justify="center" align="center" p={10} ta="center">
      <Image
        src="/images/404.webp"
        title="404 Not Found"
        w={300}
        radius="50%"
      />
      <Title>These aren't the pages your looking for...</Title>
      <Text size="xl" fw={600}>
        404 - Page not found.
      </Text>
      <LogoSmall />
      <Link href="/">
        <Button>Take me home</Button>
      </Link>
    </Stack>
  );
};

export default NotFoundPage;
