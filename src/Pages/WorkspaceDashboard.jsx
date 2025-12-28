import { useParams } from "react-router-dom";

const WorkspaceDashboard = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-6">
      <h1 className="text-2xl font-bold text-gray-800">
        Workspace Dashboard
      </h1>

      <p className="text-gray-600 mt-2">
        Workspace ID: {id}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-white rounded-xl p-6 shadow">
          Tasks
        </div>
        <div className="bg-white rounded-xl p-6 shadow">
          Progress
        </div>
        <div className="bg-white rounded-xl p-6 shadow">
          Meetings
        </div>
      </div>
    </div>
  );
};

export default WorkspaceDashboard;
