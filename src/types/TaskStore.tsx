type TaskStore = {
    task: string;
    tasks: string[];
    removeTask: (index: number) => void;
    editedIndex: number | null;
    editTask: (task: string, index: number) => void;
    changeStateTask: () => void;
    setEditedTextHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    saveTask: (index: number) => void;
    editedText: string;
    addTask: (task: string) => void;
    setTaskHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};