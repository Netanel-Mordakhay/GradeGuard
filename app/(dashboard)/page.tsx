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
import TodosBox from "../components/dashboard/TodosBox";
import { getUserTodos } from "@/lib/getUserTodos";
import SocialIcons from "../components/global/SocialIcons";

export default async function Home() {
  // Get info
  const user = await getUserSession();
  const { courses } = await getUserCourses();
  const stats = await getUserStats();
  const chartData = await getUserChartData();
  const { todos } = await getUserTodos();

  if (!user || !stats || !chartData || !todos) {
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
        <TodosBox todos={todos} />
        <SocialIcons />
      </DashboardGrid>
    </Stack>
  );
}
