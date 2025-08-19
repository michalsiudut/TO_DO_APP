import { create } from 'zustand'
import { persist } from "zustand/middleware"

export const useTaskStore = create<TaskStore>()(
    persist(
        (set, get) => ({
            task: "",
            tasks: [],
            editedIndex: null,
            editedText: "",
            editTask: (task: string, index: number) => {
                set({ editedIndex: index, editedText: task })
            },
            changeStateTask: () => {
                set({
                    editedIndex: null,
                    editedText: "",
                });
            },
            setEditedTextHandler: (e: React.ChangeEvent<HTMLInputElement>) => {
                set({
                    editedText: e.target.value
                })
            },
            saveTask: (index: number) => {
                const { tasks, editedText } = get();
                const newTasks = tasks.map((task, i) =>
                    i === index ? editedText : task
                );
                set({
                    tasks: newTasks,
                    editedIndex: null,
                    editedText: "",
                });
            },
            removeTask: (index: number) => {
                const newTasks = get().tasks.filter((_, i) => i !== index);
                set({ tasks: newTasks });
            },
            addTask: (task: string) => {
                if (task.trim() !== "") {
                    set((state) => ({
                        tasks: [...state.tasks, task],
                        task: "",
                    }));
                }
            },
            setTaskHandler: (e: React.ChangeEvent<HTMLInputElement>) => {
                set({
                    task: e.target.value
                })
            },
        }),
        {
            name: "task-list"
        }
    )
);