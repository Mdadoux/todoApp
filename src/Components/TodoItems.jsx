import deleteTask from '../assets/delete-task.svg'
import {useEffect, useState} from "react";
import styles from "../styles.js";
import {Trash} from "./";

const TodoItems = ({id, content, status,setTask}) => {
    const [inputChecked, setInputChecked] = useState(false);

    useEffect(() => {
        if(status==="done"){
            setInputChecked(true);
        }
    }, []);
    const toggleStatus = () => {
        setInputChecked(!inputChecked);
        handleStatus(id);
    }
    const handleStatus = (id) => {
        let data = JSON.parse(localStorage.getItem('tasks'));
        console.log(id);
        for (let i = 0; i < data.length; i++) {
            if (data[i].id === id) {
                if (inputChecked === false) {
                    data[i].status = "done";
                }else{
                    data[i].status = "";
                }
                break;
            }

        }
        setTask(data);
    }

    return (
        <section className="task--item bg-white p-[15px] rounded-[5px] mb-1">
            <div className="flex flex-row items-center justify-between">
                <label className="flex flex-row items-center font-semibold">
                    <input type="checkbox"
                           name="todo"
                           className="w-[18px] h-[18px] mr-2 {}"
                           checked={inputChecked}
                           onChange={toggleStatus}/>
                    {content}
                </label>
                <Trash setTask={setTask} status={status} id={id}/>
            </div>

        </section>
    );
}
export default TodoItems;