import { useState } from "react";
import "./ToDoList.css";
import { v4 as uuidv4 } from 'uuid'

export default function ToDoList() {
    let [todos, setTodos] = useState([]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () =>{
        setTodos([...todos, { task:newTodo, id:uuidv4(), isDone: false } ]);
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTask = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos)=> prevTodos.id != id) );
    };


    let markDone = (id) => {
        setTodos((prevTodos) => prevTodos.map((todo)=>{
            if(todo.id == id){
                return {
                    ...todo,
                    isDone : true,
                }
            }else{
                return todo
            }
        }));
    };

    let markAllDone = () => {
        setTodos((prevTodos) => 
        prevTodos.map((todo)=>{
            return {
                ...todo,
                isDone : true,
            }
        }));
    };

    return (
        <div className="todo-container">
            <h2>To Do List</h2>
            <input 
                type="text" 
                placeholder="Add a task" 
                onChange={updateTodoValue} 
                value={newTodo} 
            />
            <button className="addButton" onClick={addNewTask}>Add Task</button>
            
            {todos.length!=0 ?
                <div>
                    <h3>Tasks to Do</h3>
                    <ul>
                        {todos.map((todo) => (
                            <li key={todo.id}>
                                <span style={todo.isDone ? {textDecorationLine:"line-through"} : {}}>
                                    <b>{todo.task}</b>
                                </span> 
                                <div>
                                    <button className="markDone" onClick={() => markDone(todo.id)}> Mark Done</button>
                                    <button className="removeButton" onClick={() => deleteTask(todo.id)}>Remove</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <button className="markAllDone" onClick={markAllDone} > Mark All Done</button>
                </div>:""}
        </div>
    );
};