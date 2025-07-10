import React, { useState } from "react";

export default function AddList() {
  const [placeHolder, setPlaceHolder] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);

  const handlerClicked = (e) => {
    e.preventDefault();

    if (!placeHolder.trim()) {
      console.log("Please add text");
      return;
    }
    if (editId !== null) {
      // Edit existing task
      setTasks(
        tasks.map((task) =>
          task.id === editId ? { ...task, text: placeHolder } : task
        )
      );
      setEditId(null);
    } else {
      // Add new task
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text: placeHolder,
        },
      ]);
      console.log(tasks);
    }

    setPlaceHolder("");
  };
  // Delete task function
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  // Edit task function
  const handleEdit = (task) => {
    /* received edited text in place holder */
    setPlaceHolder(task.text);
    setEditId(task.id);
  };

  return (
    <>
   
       <div style={{ width: "50%", margin: "auto" }}>
        <div className="mb-2" >
          <label htmlFor="todotext" className="form-label"></label>
          <input
            type="text"
            className="form-control"
            value={placeHolder}
            onChange={(e) => setPlaceHolder(e.target.value)}
            id="todotext"
            placeholder="Please add your To Do content."
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handlerClicked}
        >
          {editId !== null ? "Update Todo" : "Add Todo"}
        </button>
        <div className="my-3">
          <span>Total Words: </span>
          <span className="mx-3">
            {placeHolder.trim() ? placeHolder.split(" ").length : 0}
          </span>
          <span className="mx-3">Total Text: </span>
          <span className="mx-3">{placeHolder.length}</span>
          <span className="mx-3">Total Task Created: </span>
          <span className="mx-3">{tasks.length}</span>
        </div>
     
      <div className="showList">
        <ul className="list-group">
          {tasks.map((task) => (
            <li
              id={task.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div className="list-group-item-div1">{task.text}</div>
              <div className="list-group-item-div2">
                <button
                  className="btn btn-success edit mx-1"
                  /* passed task as an object */
                  onClick={() => handleEdit(task)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger delete mx-1"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      </div>

    </>
  );
}
