"use client";

import { useMantineColorScheme, ActionIcon } from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";

const ThemeToggle = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <ActionIcon
      variant="filled"
      //color={isDark ? "yellow" : "blue"}
      onClick={() => setColorScheme(isDark ? "light" : "dark")}
      title="Toggle theme"
      size="lg"
    >
      {isDark ? <IconSun size={20} /> : <IconMoon size={20} />}
    </ActionIcon>
  );
};

export default ThemeToggle;
