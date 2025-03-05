
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import DashboardSeparator from "@/components/dashboard/DashboardSeparator";
import NavigationCards from "@/components/dashboard/NavigationCards";
import StatsCards from "@/components/dashboard/StatsCards";
import NewsCarousel from "@/components/dashboard/NewsCarousel";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <NavigationCards />
      <DashboardSeparator />
      <StatsCards />
      <DashboardSeparator spacing="py-8" />
      <NewsCarousel />
    </DashboardLayout>
  );
};

export default Dashboard;
