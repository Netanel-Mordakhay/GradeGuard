import DefaultCard from "@/app/components/global/DefaultCard";
import SideBar from "@/app/components/global/SideBar";
import TwoColumns from "@/app/components/layout/TwoColumns";
import { Stack, Title, Divider } from "@mantine/core";
import React from "react";

const page = () => {
  return (
    <TwoColumns>
      <DefaultCard showCover={true}>
        <Stack>
          <Title>Study session</Title>
        </Stack>
      </DefaultCard>
      <SideBar />
    </TwoColumns>
  );
};

export default page;
