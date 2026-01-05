import Sidebar from "../Components/Sidebar";
import DashboardNavbar from "../Components/navbar/DashboardNavbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen
      bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">

      <Sidebar />

      {/* Content Area */}
      <div className="flex-1 flex flex-col relative overflow-hidden">
        <DashboardNavbar />

        {/* 🔥 Background Glow Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl -z-10" />

        <main className="relative p-8 z-10">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
