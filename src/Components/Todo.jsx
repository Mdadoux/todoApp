import addNew from '../assets/add-new.svg';
import {useEffect, useRef, useState} from "react";
import {TodoItems} from "./";

let count = 0;
const Todo = (props) => {
    const [tasks, setTasks] = useState([]);
    const inputRef = useRef(null);

    // ajouter une tâche
    const addTask = () => {
        if (inputRef.current.value !== "") {
            //create a task item
            let task = {
                id: count++,
                content: inputRef.current.value,
                status: ''
            }
            // modify the task value
            setTasks([...tasks, task]);
            // emptyfy the input
            inputRef.current.value = "";
            //initialiser le conteur de tache dans le local storage
            localStorage.setItem('task-indexer', count);
        }
    }
    useEffect(() => {
        // recuperer les donnes depuis le localstorage
        let datas = JSON.parse(localStorage.getItem('tasks'));
        setTasks(datas);
        //after l'indexer du localstorage au conteur commeça au pochain ajour il sera incrémenté
        count = localStorage.getItem('task-indexer');
    }, []);
    useEffect(() => {
        setTimeout(() => {
            //persister les donnees en mémoire via localstorage
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }, 150)
    }, [tasks]);

    return (
        <section className="todo">
            <header className="todo--header">
                <h1 className="text-3xl text-writen font-bold text-[22px] mb-[20px]">Title of the page</h1>
            </header>
            <div className="mb-3 flex flex-row w-full">
                <input ref={inputRef} type="email" className="flex-1 p-[5px]" id="add-input"
                       placeholder="Add some task"/>
                <button type="button"
                        className="border px-[10px] py-[5px] bg-primary items-center gap-1 text-white font-bold flex flex-row"
                        onClick={() => addTask()}>Add task <img
                    src={addNew} alt="add new item icon" className="h-[25px] w-[25px]"/>
                </button>
            </div>
            <div className="todo-list">

                {tasks.map((task, index) => (
                    <TodoItems key={index} {...task} setTask={setTasks}/>
                ))
                }
            </div>
        </section>
    )
}

export default Todo;