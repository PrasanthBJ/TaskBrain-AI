const CreateUserModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl">
        
        <h3 className="text-xl font-bold mb-4">
          Create New User
        </h3>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-lg px-4 py-3"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded-lg px-4 py-3"
          />

          <select className="w-full border rounded-lg px-4 py-3">
            <option>Select Role</option>
            <option>Manager</option>
            <option>Developer</option>
            <option>Designer</option>
            <option>Tester</option>
          </select>

          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border font-semibold"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="
                px-5 py-2 rounded-lg
                font-semibold text-white
                bg-gradient-to-r from-pink-500 to-purple-500
              "
            >
              Create User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUserModal;
