import "./TodoItem.scss";

export const TodoItem = ({ task, deleteTask, toggleCompleted }) => {
  function handleChange() {
    toggleCompleted(task.id);
  }

  return (
    <div className="todo-item">
      <input
        className="checkbox"
        type="checkbox"
        checked={task.status === "done"}
        onChange={handleChange}
      />
      <p
        className={`todo-item ${
          task.status !== "open" ? "todo-item--closed" : "todo-item--open"
        }`}
      >
        {task.description}
      </p>
      <button onClick={() => deleteTask(task.id)} className="del-button">
        <img
          src="/src/assets/icons/delete.svg"
          alt="trash-icon"
          className="del-icon"
        />
      </button>
    </div>
  );
};
