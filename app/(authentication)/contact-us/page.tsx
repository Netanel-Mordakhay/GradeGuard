import ContactUsForm from "@/app/components/contact-us/ContactUsForm";
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
  return <ContactUsForm />;
};

export default page;
