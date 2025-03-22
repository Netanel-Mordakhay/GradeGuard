import React from "react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconShare,
} from "@tabler/icons-react";
import { ActionIcon, Group } from "@mantine/core";
import Link from "next/link";
import DefaultCard from "./DefaultCard";

const data = [
  { link: "#", label: "Facebook", icon: IconBrandFacebook, color: "#1877F2" },
  {
    link: "#",
    label: "Instagram",
    icon: IconBrandInstagram,
    color: "#C13584",
  },
  {
    link: "#",
    label: "Whatsapp",
    icon: IconBrandWhatsapp,
    color: "#25D366",
  },
  { link: "#", label: "Link", icon: IconShare, color: "#A2AAAD" },
];

const SocialIcons = () => {
  const icons = data.map((item) => (
    <Link key={item.label} href={item.link}>
      <ActionIcon color={item.color} size="xl">
        <item.icon size={24} />
      </ActionIcon>
    </Link>
  ));

  return (
    <DefaultCard title="Share GradeGuard">
      <Group justify="space-evenly">{icons}</Group>
    </DefaultCard>
  );
};

export default SocialIcons;
