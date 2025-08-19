type TaskStore = {
    task: string;
    tasks: Task[];
    removeTask: (index: number) => void;
    editedIndex: number | null;
    editTask: (task: string, index: number) => void;
    changeStateTask: () => void;
    setEditedTextHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    saveTask: (index: number) => void;
    editedText: string;
    addTask: (task: string, status: Task["status"]) => void;
    setTaskHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    status: string;
    setStatus: (stat: string) => void;
};