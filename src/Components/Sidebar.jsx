import {
  FaHome,
  FaProjectDiagram,
  FaUsers,
  FaTasks,
  FaCalendarAlt,
  FaChartBar,
} from "react-icons/fa";

const menu = [
  { label: "Dashboard", icon: <FaHome /> },
  { label: "Projects", icon: <FaProjectDiagram /> },
  { label: "Team", icon: <FaUsers /> },
  { label: "Tasks", icon: <FaTasks /> },
  { label: "Meetings", icon: <FaCalendarAlt /> },
  { label: "Analytics", icon: <FaChartBar /> },
];

const Sidebar = () => {
  return (
    <aside className="
      w-64 min-h-screen
      bg-white
      border-r border-gray-200
      px-6 py-8
    ">
      {/* Brand (ONLY here) */}
      <h1 className="text-2xl font-extrabold text-pink-600 mb-10">
        TaskBrain AI
      </h1>

      <nav className="space-y-2">
        {menu.map(item => (
          <div
            key={item.label}
            className="
              flex items-center gap-3
              px-4 py-3
              rounded-xl
              font-semibold
              text-gray-700
              cursor-pointer
              hover:bg-pink-50 hover:text-pink-600
              transition-all
            "
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
