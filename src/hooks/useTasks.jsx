import { useState } from "react";
import { useLocalStorageState } from "./useLocalStorageState";


export function useTasks() {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useLocalStorageState("tasks", []);
    const [editedIndex, setEditedIndex] = useState(null);
    const [editedText, setEditedText] = useState('');
    const [useAnimation, setAnimation] = useState(false);
    const [isFull, setFull] = useState(false);
    const [animatingCancelIndex, setAnimatingIndex] = useState(null);
    const [editAnimationIndex, setEditAnimationIndex] = useState(null);
    const [saveAnimationIndex, setSaveAnimationIndex] = useState(null);
    const [userNameEdited, setUserNameEdited] = useState("");
    const [userName, setUserName] = useLocalStorageState("userName", "No data");
    const [userAgeEdited, setUserAgeEdited] = useState("");
    const [userAge, setUserAge] = useLocalStorageState("userAge", "No data");

    const setUserAgeEditedHandler = (age) => {
        setUserAgeEdited(age);
    }

    const setUserAgeHandler = () => {
        setUserAge(userAgeEdited);
        setUserAgeEdited("");
    }

    const setUserNameHandler = () => {

        setUserName(userNameEdited);
        setUserNameEdited("");
    }

    const setEditedUserNameHandler = (text) => {
        setUserNameEdited(text);
    }

    const setTaskHandler = (event) => {
        setTask(event.target.value);
        setFull(event.target.value.trim() != '');
    }

    const removeTask = (index) => {
        setAnimatingIndex(index);
        setTimeout(() => {
            setTasks(prev => prev.filter((_, i) => i !== index));
            setAnimatingIndex(null);
        }, 1000);
    };

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
        setEditAnimationIndex(index);
        setEditedIndex(index);
        setEditedText(text);
        setTimeout(() => { setEditAnimationIndex(null); }, 500);
    }

    const saveTask = (index) => {
        setTasks(prev => prev.map((t, i) => (i === editedIndex ? editedText : t)));
        setSaveAnimationIndex(index);
        setEditedIndex(null);
        setEditedText('');
        setTimeout(() => { setSaveAnimationIndex(null); }, 1000);
    };

    const setEditedTextHandler = (e) => {
        setEditedText(e.target.value);
    };



    return {
        task, tasks, addTask, removeTask, setTaskHandler,
        editedIndex, editTask, changeStateTask, setEditedTextHandler,
        saveTask, editedText, useAnimation, isFull, animatingCancelIndex,
        editAnimationIndex, saveAnimationIndex, userNameEdited, setEditedUserNameHandler,
        setUserNameHandler, userName, setUserAgeEditedHandler, setUserAgeHandler, userAge, userAgeEdited
    }


}