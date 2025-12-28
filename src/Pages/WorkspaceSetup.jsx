import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const WorkspaceSetup = () => {
  const [mode, setMode] = useState(null);
  const [workspaceName, setWorkspaceName] = useState("");
  const [description, setDescription] = useState("");
  const [inviteCode, setInviteCode] = useState("");

  const { state } = useLocation();
  const navigate = useNavigate();
  const role = state?.role || localStorage.getItem("role");


  const pageContent = {
    MANAGER: {
      title: "Create Your Workspace",
      desc: "Start a new project, invite members, and manage tasks efficiently."
    },
    STUDENT: {
      title: "Workspace Setup",
      desc: "Create a workspace or join one using an invite code."
    },
    TEAM_MEMBER: {
      title: "Join a Workspace",
      desc: "Enter the invite code shared by your manager."
    }
  };

  const handleCreateWorkspace = () => {
  if (!workspaceName.trim()) return alert("Workspace name is required");

  const workspaceId =
    "ws_" + Math.random().toString(36).substring(2, 8);

  navigate(`/workspace/${workspaceId}`);
};


  const handleJoinWorkspace = () => {
  if (!inviteCode.trim()) return alert("Invite code is required");

  navigate(`/workspace/${inviteCode}`);
};

  return (
    <section className="min-h-screen flex items-center justify-center
      bg-gradient-to-r from-pink-50 via-white to-purple-50 px-6">

      <div className="max-w-4xl w-full text-center">

        <h1 className="text-4xl font-extrabold mb-4
          bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500
          bg-clip-text text-transparent">
          {pageContent[role]?.title || "Workspace Setup"}
        </h1>

        <p className="text-gray-600 mb-12">
          {pageContent[role]?.desc}
        </p>

        {!mode && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {(role === "MANAGER" || role === "STUDENT") && (
              <Card
                title="Create Workspace"
                desc="Start a new project and invite members."
                color="purple"
                onClick={() => setMode("create")}
              />
            )}

            {(role === "STUDENT" || role === "TEAM_MEMBER") && (
              <Card
                title="Join Workspace"
                desc="Join an existing workspace using an invite code."
                color="pink"
                onClick={() => setMode("join")}
              />
            )}

          </div>
        )}

        {mode === "create" && (
          <FormContainer title="Create Workspace">
            <button className="text-sm text-purple-500" onClick={() => setMode(null)}>
              ← Back
            </button>
            <input
              className="input"
              placeholder="Workspace Name"
              value={workspaceName}
              onChange={(e) => setWorkspaceName(e.target.value)}
            />
            <textarea
              className="input"
              placeholder="Description (optional)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button className="btn-primary" onClick={handleCreateWorkspace}>
              Create Workspace
            </button>
          </FormContainer>
        )}

        {mode === "join" && (
          <FormContainer title="Join Workspace">
            <button className="text-sm text-purple-500" onClick={() => setMode(null)}>
              ← Back
            </button>
            <input
              className="input"
              placeholder="Invite Code"
              value={inviteCode}
              onChange={(e) => setInviteCode(e.target.value)}
            />
            <button className="btn-primary" onClick={handleJoinWorkspace}>
              Join Workspace
            </button>
          </FormContainer>
        )}

      </div>
    </section>
  );
};

const Card = ({ title, desc, onClick, color }) => (
  <div
    onClick={onClick}
    className={`cursor-pointer bg-white p-8 rounded-2xl
      shadow-md hover:shadow-xl transition-all
      hover:scale-105 ring-1 ring-transparent
      hover:ring-${color}-400`}
  >
    <h2 className="text-xl font-bold mb-3">{title}</h2>
    <p className="text-gray-600">{desc}</p>
  </div>
);

const FormContainer = ({ title, children }) => (
  <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 text-left space-y-4">
    <h2 className="text-2xl font-bold">{title}</h2>
    {children}
  </div>
);

export default WorkspaceSetup;
