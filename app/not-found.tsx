import { Button, Image, Group, Stack, Text, Title } from "@mantine/core";
import React from "react";
import Link from "next/link";
import classes from "./styles/NotFoundPage.module.css";
import LogoSmall from "./components/global/LogoSmall";

const NotFoundPage = () => {
  return (
    <Stack h="100svh" justify="center" align="center" ta="center" p={10}>
      <LogoSmall />
      <Image src="/images/404.webp" w={300} radius="50%" />
      <div className={classes.label}>404 - Not Found</div>
      <Title className={classes.title}>
        "These aren't the pages you're looking for..."
      </Title>
      <Link href="/">
        <Button variant="subtle" size="md">
          Take me back to home page
        </Button>
      </Link>
    </Stack>
  );
};

export default NotFoundPage;
