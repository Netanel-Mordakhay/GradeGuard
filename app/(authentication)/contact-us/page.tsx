import ContactUsForm from "@/app/components/contact-us/ContactUsForm";
import ContactUsHero from "@/app/components/contact-us/ContactUsHero";
import DefaultCard from "@/app/components/global/DefaultCard";
import SideBar from "@/app/components/global/SideBar";
import AuthenticationLayout from "@/app/components/layout/AuthenticationLayout";
import TwoColumns from "@/app/components/layout/TwoColumns";
import Features from "@/app/components/login/Features";
import { Stack, Divider, Title, Text } from "@mantine/core";
import React from "react";

export const metadata = {
  title: "GradeGuard - Contact Us",
  description: "GradeGuard contact page.",
};

const page = () => {
  return (
    <AuthenticationLayout>
      <ContactUsForm />
      {/* ContactUsHero */}
      <ContactUsHero />
    </AuthenticationLayout>
  );
};

export default page;
