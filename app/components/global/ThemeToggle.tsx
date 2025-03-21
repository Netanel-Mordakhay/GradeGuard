"use client";

import { useEffect, useState } from "react";
import { useMantineColorScheme, ActionIcon } from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";

const ThemeToggle = () => {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ActionIcon
      variant="transparent"
      color="dark"
      onClick={() => setColorScheme(isDark ? "light" : "dark")}
      title="Toggle theme"
      size="lg"
    >
      {isDark ? <IconSun size={20} /> : <IconMoon size={20} />}
    </ActionIcon>
  );
};

export default ThemeToggle;
