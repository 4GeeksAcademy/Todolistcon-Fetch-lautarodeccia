import React, { useState } from "react";

const List = () => {
    let [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState();
    const manejarEnter = (event) => {
        if (event.key === "Enter" && inputValue.trim() !== "") {
            setTasks([...tasks, inputValue]);
            setInputValue("");

        }
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    const removeTask = (index) => {
        const newTasks = tasks.filter((task, i) => i !== index);
        setTasks(newTasks);
    };
    return (
        <div className="card" style={{ width: "30rem" }}>
            <div className="card-body">
                <h5 className="card-title">Todos</h5>
                <form action="" onSubmit={(e) => e.preventDefault()}>
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            id="miInput"
                            className="form-control"
                            value={inputValue || ""}
                            onChange={handleInputChange}
                            onKeyDown={manejarEnter}
                            placeholder="Añadir una tarea"
                        />
                    </div>
                </form>
                
                {tasks.length === 0 ? (
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item col-12 gap-3 mx-auto todo-item text-center">
                             No hay tareas, por favor añade una
                        </li>
                    </ul>
                ) : (
                    <ul className="list-group list-group-flush">
                        {tasks.map((task, index) => (
                            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                                {task}
                                <i className="fas fa-times text-danger" style={{ cursor: 'pointer' }} onClick={() => removeTask(index)}></i>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default List;