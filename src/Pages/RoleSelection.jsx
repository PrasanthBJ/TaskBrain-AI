import React from "react";
import { useNavigate } from "react-router-dom";

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    console.log("Selected Role:", role);
    navigate("/workspace");
  };

  return (
    <section className="min-h-screen flex items-center justify-center
      bg-gradient-to-r from-pink-50 via-white to-purple-50 px-6">

      <div className="max-w-5xl w-full text-center">
        
        {/* Gradient Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4
          bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500
          bg-clip-text text-transparent">
          Choose Your Role
        </h1>

        <p className="text-gray-600 mb-12">
          TaskBrain AI adapts features based on how you work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Project Manager */}
          <RoleCard
            title="Project Manager"
            desc="Create projects, assign tasks, track progress, and host meetings."
            color="purple"
            onClick={() => handleRoleSelect("MANAGER")}
          />

          {/* Student */}
          <RoleCard
            title="Student"
            desc="Work on academic projects, meet deadlines, and collaborate with guidance."
            color="pink"
            onClick={() => handleRoleSelect("STUDENT")}
          />

          {/* Team Member */}
          <RoleCard
            title="Team Member"
            desc="Execute tasks, update progress, attend meetings, and collaborate."
            color="indigo"
            onClick={() => handleRoleSelect("TEAM_MEMBER")}
          />

        </div>
      </div>
    </section>
  );
};

const RoleCard = ({ title, desc, onClick, color }) => {
  const colors = {
    purple: "hover:ring-purple-400",
    pink: "hover:ring-pink-400",
    indigo: "hover:ring-indigo-400",
  };

  return (
    <div
      onClick={onClick}
      className={`cursor-pointer bg-white rounded-2xl p-8
        shadow-md hover:shadow-xl transition-all
        hover:scale-105 ring-1 ring-transparent
        ${colors[color]}`}
    >
      <h2 className="text-xl font-bold text-gray-800 mb-3">
        {title}
      </h2>
      <p className="text-gray-600">
        {desc}
      </p>
    </div>
  );
};

export default RoleSelection;
