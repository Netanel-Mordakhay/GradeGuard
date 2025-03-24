import { Stack } from "@mantine/core";
import React from "react";
import TipsBox from "./TipsBox";
import SocialIcons from "./SocialIcons";
import QuickActionsBox from "../dashboard/QuickActionsBox";

const SideBar = () => {
  return (
    <Stack visibleFrom="md">
      <SocialIcons />
      <QuickActionsBox />
      <TipsBox />
    </Stack>
  );
};

export default SideBar;
