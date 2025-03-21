import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import DashboardGrid from "../components/layout/DashboardGrid";
import UserBox from "../components/dashboard/UserBox";

export default async function Home() {
  // Get session from server
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return <p>You must be logged in.</p>;
  }

  return (
    <DashboardGrid>
      <UserBox session={session} />
    </DashboardGrid>
  );
}
