import "../Todo/Todo.scss";

export const Item = ({ item }) => {
  return (
    <li id={item?.id} className="todo_item">
      <button className="todo_items_left">
        <circle cx="11.998" cy="11.998" fillRule="nonzero" r="9.998" />
        <p>{item?.title}</p>
      </button>
      <div className="todo_items_right">
        <button>
          <span className="visually-hidden">Edit</span>
          edit
        </button>
        <button>
          <span className="visually-hidden">Delete</span>
          del
        </button>
      </div>
    </li>
  );
};
