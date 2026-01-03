import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTasksByProject } from "../services/taskService";
import TaskCard from "../Components/TaskCard";
import CreateTaskModal from "../Components/CreateTaskModal";

const Tasks = () => {
  const { id: projectId } = useParams();
  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = useState(false);

  const loadTasks = async () => {
    const res = await getTasksByProject(projectId);
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, [projectId]);

  return (
    <div className="p-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Tasks</h1>
        <button className="btn-primary" onClick={() => setOpen(true)}>
          + Create Task
        </button>
      </div>

      <div className="grid gap-4">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>

      {open && (
        <CreateTaskModal
          projectId={projectId}
          onClose={() => setOpen(false)}
          onCreated={loadTasks}
        />
      )}
    </div>
  );
};

export default Tasks;
