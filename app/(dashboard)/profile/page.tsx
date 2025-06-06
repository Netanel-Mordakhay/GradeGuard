import TipsBox from "@/app/components/global/TipsBox";
import DefaultCard from "@/app/components/global/DefaultCard";
import TwoColumns from "@/app/components/layout/TwoColumns";
import React from "react";
import SideBar from "@/app/components/global/SideBar";
import UserInformation from "@/app/components/profile/UserInformation";
import { getUserSession } from "@/lib/getUserSession";
import { Divider, Stack, VisuallyHidden } from "@mantine/core";
import EditProfileForm from "@/app/components/profile/EditProfileForm";

export const metadata = {
  title: "GradeGuard - Edit Profile",
  description: "Manage your courses efficiently with GradeGuard",
};

const ProfilePage = async () => {
  const user = await getUserSession();
  return (
    <TwoColumns>
      <DefaultCard showCover={true}>
        <Stack mt={-100}>
          <UserInformation user={user} />
          <Divider />
          <EditProfileForm defaultValues={user} />
        </Stack>
      </DefaultCard>
      <SideBar />
    </TwoColumns>
  );
};

export default ProfilePage;
