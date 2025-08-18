import { CustomButton } from "../Button";

type TaskListProps = {
    tasks: string[];
    removeTask: (index: number) => void;
    editedIndex: number | null;
    editTask: (task: string, index: number) => void;
    changeStateTask: () => void;
    setEditedTextHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    saveTask: (index: number) => void;
    editedText: string;
};

export const TaskList = ({
    tasks, removeTask, editedIndex, editTask,
    changeStateTask, setEditedTextHandler, saveTask,
    editedText
}: TaskListProps) => {

    return (<>
        <ul className='mx-auto space-y-2 mt-5'>
            {tasks.map((t: string, index: number) => (
                <li key={index} className="p-3 rounded-2xl bg-[#121212] flex items-center">
                    <span className='mr-10 border-2 border-dotted rounded-2xl p-2.5 w-20'>Task {index + 1}</span>
                    {editedIndex === index ? (
                        <div className="flex items-center w-full gap-2">
                            <input
                                className="inputEdit flex-1"
                                value={editedText}
                                onChange={setEditedTextHandler}
                            />
                            <div className="flex gap-2">
                                <CustomButton
                                    onClick={() => saveTask(index)}
                                    text="Save"
                                />
                                <CustomButton
                                    onClick={changeStateTask}
                                    text="Cancel"
                                />
                            </div>
                        </div>

                    ) : (
                        <div className="flex items-center w-full gap-2">
                            <span>{t}</span>
                            <div className="ml-auto items-center">
                                <CustomButton
                                    onClick={() => removeTask(index)}
                                    text="Remove" />
                                <CustomButton
                                    onClick={() => editTask(t, index)}
                                    text="Edit" />
                            </div>
                        </div>
                    )}
                </li>
            ))}
        </ul>

    </>)
}