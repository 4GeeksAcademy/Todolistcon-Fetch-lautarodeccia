import React, { useState, useEffect } from "react";

const List = () => {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const manejarEnter = (event) => {
        if (event.key === "Enter" && inputValue.trim() !== "") {
            addTask(inputValue);
            setInputValue("");
        }
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
// crear usuario
    const createUser = () => {
        fetch('https://playground.4geeks.com/todo/users/tatide', {
            method: "POST",
        })
            .then((response) => {
                if (response.status === 201) {
                    getMyList();
                }
                return response.json();
            })
            .then(response => console.log(response))
            .catch(error => console.log(error));
    };
//traer tareas
    const getMyList = () => {
        fetch('https://playground.4geeks.com/todo/users/tatide', {})
            .then((response) => {
                if (response.status === 404) {
                    createUser();
                }
                return response.json();
            })
            .then(data => {
                setTasks(data.todos);
                console.log(data.todos);
            })
            .catch(error => console.log(error));
    };
//agregar tarea
    const addTask = (task) => {
        fetch('https://playground.4geeks.com/todo/todos/tatide', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ label: task, is_done: false })
        })
            .then((response) => response.json())
            .then((data) => {
                setTasks([...tasks, { ...data, label: task, is_done: false }]);
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };
//eliminar tarea
    const deleteTask = (id) => {
        fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
            method: "DELETE"
        })
            .then((response) => {
                if (response.ok) {
                    setTasks(tasks.filter(task => task.id !== id));
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
//Actualizar tarea
    const updateTask = (id) => {
        const taskToUpdate = tasks.find(task => task.id === id);
        fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...taskToUpdate, is_done: !taskToUpdate.is_done })
        })
        .then((response) => response.json())
        .then((data) => {
            setTasks(tasks.map(task => (task.id === id ? { ...task, is_done: !task.is_done } : task)));
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        });
    };
    useEffect(() => {
        getMyList();
    }, []);

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
                            value={inputValue}
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
                        {tasks.map((task) => (
                            <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <span style={{ textDecoration: task.is_done ? 'line-through' : 'none' }}>
                                    {task.label}
                                </span>
                                <div>
                                    <i className="fas fa-check text-success" style={{ cursor: 'pointer', marginRight: '10px' }} onClick={() => updateTask(task.id)}></i>
                                    <i className="fas fa-times text-danger" style={{ cursor: 'pointer' }} onClick={() => deleteTask(task.id)}></i>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default List;
