import { useState } from "react";
import { useLocalStorageState } from "./useLocalStorageState";



export function useTasks() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useLocalStorageState(task, []);
    const [editedIndex, setEditedIndex] = useState(null);
    const [editedText, setEditedText] = useState('');
    const [useAnimation, setAnimation] = useState(false);
    const [isFull, setFull] = useState(false);

    const setTaskHandler = (event) => {
        setTask(event.target.value);
        setFull(event.target.value.trim() != '');
    }

    const removeTask = (index) => {
        setTasks(prev => prev.filter((_, i) => i != index));
    }
    const addTask = () => {
        if (task.trim() != '') {
            setTasks(prev => [...prev, task]);
            setTask('');
            setAnimation(true);
            setTimeout(() => { setAnimation(false); }, 300);
        }

    }

    const changeStateTask = () => {
        setEditedIndex(null);
        setEditedText(null);
    }

    const editTask = (text, index) => {
        setEditedIndex(index);
        setEditedText(text);
    }

    const saveTask = () => {
        setTasks(prev => prev.map((t, i) => (i === editedIndex ? editedText : t)));
        setEditedIndex(null);
        setEditedText('');
    };

    const setEditedTextHandler = (e) => {
        setEditedText(e.target.value);
    };



    return { task, tasks, addTask, removeTask, setTaskHandler, editedIndex, editTask, changeStateTask, setEditedTextHandler, saveTask, editedText, useAnimation, isFull }


}