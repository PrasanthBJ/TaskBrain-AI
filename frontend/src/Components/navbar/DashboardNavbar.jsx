const DashboardNavbar = () => {
  const role = localStorage.getItem("role") || "Manager";

  return (
    <header className="
      h-16
      bg-white/80 backdrop-blur
      border-b border-gray-200
      px-8
      flex items-center justify-between
    ">
      {/* Page Title */}
      <h1 className="text-lg font-bold text-gray-800">
        Dashboard
      </h1>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <span className="
          px-4 py-1
          rounded-full
          text-sm font-semibold
          bg-pink-100 text-pink-600
        ">
          {role}
        </span>

        <button
          className="
            px-5 py-2
            rounded-full
            font-semibold text-sm text-white
            bg-gradient-to-r from-pink-500 to-purple-500
            hover:from-pink-600 hover:to-purple-600
            transition-all
          "
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default DashboardNavbar;
