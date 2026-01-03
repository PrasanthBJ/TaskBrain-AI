import { useState } from "react";
import { createTask } from "../services/taskService";

const CreateTaskModal = ({ projectId, onClose, onCreated }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submit = async () => {
    await createTask(projectId, { title, description });
    onCreated();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="font-bold mb-4">Create Task</h2>

        <input
          className="input mb-3"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="input mb-4"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className="flex justify-end gap-3">
          <button onClick={onClose}>Cancel</button>
          <button className="btn-primary" onClick={submit}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTaskModal;
