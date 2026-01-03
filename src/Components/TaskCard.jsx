const TaskCard = ({ task }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold">{task.title}</h3>
      <p className="text-sm text-gray-600">{task.description}</p>
      <p className="text-xs text-gray-400 mt-2">
        Status: {task.status || "NEW"}
      </p>
    </div>
  );
};

export default TaskCard;
