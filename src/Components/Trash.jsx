import deleteTask from "../assets/delete-task.svg";
import {data} from "autoprefixer";

const Trash = ({setTask,status,id}) => {
   //recuprer les données dans le local storage
    let data = JSON.parse(localStorage.getItem('tasks'));
//pacourir les données
    const removetask= ()=>{
        data.map((item,index)=>{
            // trouver le bom élément
           if(item.id === id && item.status ==='done'){
               data.splice(index,1)
           }
        })
        setTask(data);
    }

    return (
        <div className="actions cursor-pointer">
            <img src={deleteTask} alt="delete task icon"
                 className="w-[25px] object-contain"
                 onClick={removetask}
                 id={id}
            />
        </div>
    );
}
export default Trash;