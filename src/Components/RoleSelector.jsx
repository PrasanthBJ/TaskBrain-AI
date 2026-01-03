const RoleSelector = ({ role, setRole }) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-gray-700">
        Select your role
      </label>

      <div className="grid grid-cols-3 gap-3">
        {["MANAGER", "STUDENT", "TEAM_MEMBER"].map((r) => (
          <button
            key={r}
            type="button"
            onClick={() => setRole(r)}
            className={`py-2 rounded-lg border text-sm font-medium
              ${
                role === r
                  ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                  : "bg-white hover:bg-gray-50"
              }`}
          >
            {r.replace("_", " ")}
          </button>
        ))}
      </div>
    </div>
  );
};

export default RoleSelector;
