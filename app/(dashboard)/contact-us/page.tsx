import DefaultCard from "@/app/components/global/DefaultCard";
import SideBar from "@/app/components/global/SideBar";
import TwoColumns from "@/app/components/layout/TwoColumns";
import { Stack, Divider, Title, Text } from "@mantine/core";
import React from "react";

export const metadata = {
  title: "GradeGuard - Contact Us",
  description: "GradeGuard contact page.",
};

const page = () => {
  return (
    <TwoColumns>
      <DefaultCard showCover={true}>
        <Stack>
          <Title>Contact Us</Title>
          <Text mt={-15}>So call me, maybe?</Text>
          <Divider />
        </Stack>
      </DefaultCard>
      <SideBar />
    </TwoColumns>
  );
};

export default page;
