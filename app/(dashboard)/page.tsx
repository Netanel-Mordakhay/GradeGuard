import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import DashboardGrid from "../components/layout/DashboardGrid";
import UserBox from "../components/dashboard/UserBox";
import { getUserSession } from "@/lib/getUserSession";
import { getUserCourses } from "@/lib/getUserCourses";
import GradesBox from "../components/dashboard/GradesBox";
import TipsBox from "../components/global/TipsBox";
import SocialIcons from "../components/global/SocialIcons";
import QuickActionsBox from "../components/dashboard/QuickActionsBox";
import { Box, Stack } from "@mantine/core";
import TopStatistics from "../components/dashboard/TopStatistics";

export default async function Home() {
  // Get info
  const user = await getUserSession();
  const { courses } = await getUserCourses();

  if (!user) {
    return null;
  }

  return (
    <Stack>
      <Box visibleFrom="md">
        <TopStatistics />
      </Box>
      <DashboardGrid>
        <UserBox user={user} />
        <GradesBox courses={courses} />
        <QuickActionsBox />
        <TipsBox />
      </DashboardGrid>
    </Stack>
  );
}
