import { Stack } from "@mantine/core";
import React from "react";
import TipsBox from "./TipsBox";
import SocialIcons from "./SocialIcons";

const SideBar = () => {
  return (
    <Stack visibleFrom="md">
      <SocialIcons />
      <TipsBox />
    </Stack>
  );
};

export default SideBar;
