import DashboardGrid from "../components/layout/DashboardGrid";
import UserBox from "../components/dashboard/UserBox";
import { getUserSession } from "@/lib/getUserSession";
import { getUserCourses } from "@/lib/getUserCourses";
import GradesBox from "../components/dashboard/GradesBox";
import TipsBox from "../components/global/TipsBox";
import QuickActionsBox from "../components/dashboard/QuickActionsBox";
import { Box, Stack } from "@mantine/core";
import TopStatistics from "../components/dashboard/TopStatistics";
import ChartBox from "../components/dashboard/ChartBox";
import { getUserStats } from "@/lib/getUserStats";
import { getUserChartData } from "@/lib/getUserChartData";

export default async function Home() {
  // Get info
  const user = await getUserSession();
  const { courses } = await getUserCourses();
  const stats = await getUserStats();
  const chartData = await getUserChartData();

  if (!user || !stats || !chartData) {
    return null;
  }

  return (
    <Stack>
      <Box visibleFrom="md">
        <TopStatistics />
      </Box>
      <DashboardGrid>
        <UserBox user={user} />
        <GradesBox stats={stats} />
        <QuickActionsBox />
        <TipsBox />
        <ChartBox chartData={chartData} />
      </DashboardGrid>
    </Stack>
  );
}
