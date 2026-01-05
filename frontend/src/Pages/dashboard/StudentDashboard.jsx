import DashboardLayout from "../../layouts/DashBoardLayout";
import StatCard from "../../components/StatCard";

const StudentDashboard = () => {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold mb-6">
        Welcome 👋
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Assigned Tasks" value="8" />
        <StatCard title="Completed" value="5" />
        <StatCard title="Upcoming Deadlines" value="2" />
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
