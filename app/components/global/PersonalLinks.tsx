import { Group } from "@mantine/core";
import {
  IconWorldWww,
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const links = [
  {
    label: "website",
    icon: IconWorldWww,
    link: "https://naticodes.com",
  },
  {
    label: "Linkedin",
    icon: IconBrandLinkedin,
    link: "https://www.linkedin.com/in/netanel-mordakhay/",
  },
  {
    label: "GitHub",
    icon: IconBrandGithub,
    link: "https://github.com/Netanel-Mordakhay",
  },
];

const PersonalLinks = () => {
  return (
    <Group mt={5}>
      {links.map((item) => (
        <motion.div
          key={item.label}
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.8 }}
        >
          <Link href={item.link} target="_blank">
            <item.icon size={18} color="gray" />
          </Link>
        </motion.div>
      ))}
    </Group>
  );
};

export default PersonalLinks;
