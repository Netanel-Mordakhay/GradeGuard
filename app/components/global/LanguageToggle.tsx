import { Menu, UnstyledButton, Group, Image } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import classes from "../../styles/LanguageToggle.module.css";
import React, { useState } from "react";

const data = [
  { label: "English", image: "/language/usflag.webp" },
  { label: "Hebrew", image: "/language/ilflag.webp" },
];

const LanguageToggle = () => {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState(data[0]);
  const items = data.map((item) => (
    <Menu.Item
      leftSection={<Image src={item.image} width={14} height={14} />}
      onClick={() => setSelected(item)}
      key={item.label}
    >
      {item.label}
    </Menu.Item>
  ));

  return (
    <Menu
      onOpen={() => setOpened(true)}
      onClose={() => setOpened(false)}
      radius="md"
      width="target"
      withinPortal
    >
      <Menu.Target>
        <UnstyledButton
          className={classes.control}
          data-expanded={opened || undefined}
        >
          <Group gap="xs">
            <Image src={selected.image} width={14} height={14} />
            <span className={classes.label}>{selected.label}</span>
          </Group>
          <IconChevronDown size={14} className={classes.icon} stroke={1.5} />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>{items}</Menu.Dropdown>
    </Menu>
  );
};

export default LanguageToggle;
