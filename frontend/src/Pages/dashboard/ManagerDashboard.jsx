import { useState } from "react";
import DashboardLayout from "../../layouts/DashBoardLayout";
import CreateUserModal from "../../Components/CreateUserModel";

const ManagerDashboard = () => {
  const [showModal, setShowModal] = useState(false);

  // ✅ START EMPTY
  const users = [];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">
            User Management
          </h2>
          <p className="text-gray-500 mt-1">
            Manage employees and assign roles
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="
            px-6 py-3 rounded-xl
            font-semibold text-white
            bg-gradient-to-r from-pink-500 to-purple-500
            hover:from-pink-600 hover:to-purple-600
            transition-all
          "
        >
          + Create User
        </button>
      </div>

      {/* EMPTY STATE */}
      {users.length === 0 ? (
        <div className="
          flex flex-col items-center justify-center
          bg-white/70 backdrop-blur-xl
          rounded-2xl shadow-lg
          py-20
        ">
          <div className="text-6xl mb-4">👥</div>

          <h3 className="text-xl font-bold text-gray-800 mb-2">
            No users created yet
          </h3>

          <p className="text-gray-500 mb-6 text-center max-w-md">
            Start by creating employees and assigning them roles
            to manage tasks and meetings.
          </p>

          <button
            onClick={() => setShowModal(true)}
            className="
              px-6 py-3 rounded-xl
              font-semibold text-white
              bg-gradient-to-r from-pink-500 to-purple-500
              hover:from-pink-600 hover:to-purple-600
              transition-all
            "
          >
            Create Your First User
          </button>
        </div>
      ) : (
        /* USERS TABLE (future) */
        <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr className="text-left text-sm text-gray-600 font-semibold">
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Role</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Will render when users exist */}
            </tbody>
          </table>
        </div>
      )}

      {/* Create User Modal */}
      {showModal && <CreateUserModal onClose={() => setShowModal(false)} />}
    </DashboardLayout>
  );
};

export default ManagerDashboard;
