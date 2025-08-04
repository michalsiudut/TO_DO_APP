import { useState } from "react";
import { useLocalStorageState } from "./useLocalStorageState";



export function useTasks() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useLocalStorageState(task, []);
    const [isEdited, setEdit] = useState(false);

    const setTaskHandler = (event) => {
        setTask(event.target.value);
    }


    const removeTask = (index) => {
        setTasks(prev => prev.filter((_, i) => i != index));
    }
    const addTask = () => {
        if (task.trim() != '') {
            setTasks(prev => [...prev, task]);
            setTask('');
        }
    }

    const editTask = (text, index) => {
        setEdit((prev) => !prev);
        console.log("elo")
    }



    return { task, tasks, addTask, removeTask, setTaskHandler, isEdited, editTask }


}