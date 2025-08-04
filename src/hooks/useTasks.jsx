import { useState } from "react";
import { useLocalStorageState } from "./useLocalStorageState";



export function useTasks() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useLocalStorageState(task, []);
    const [editedIndex, setEditedIndex] = useState(null);
    const [editedText, setEditedText] = useState('');

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


    return { task, tasks, addTask, removeTask, setTaskHandler, editedIndex, editTask, changeStateTask, setEditedTextHandler, saveTask, editedText }


}