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
    useAnimation: boolean;
    isFull: boolean;
    animatingCancelIndex: number | null;
    editAnimationIndex: number | null;
    saveAnimationIndex: number | null;
};

export const TaskList = ({
    tasks, removeTask, editedIndex, editTask,
    changeStateTask, setEditedTextHandler, saveTask,
    editedText, useAnimation, isFull,
    animatingCancelIndex, editAnimationIndex, saveAnimationIndex
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
                                    useEditAnimation="true"
                                    useAnimation={useAnimation}
                                    isFull={isFull}
                                    text="Save"
                                    clas="saveButton"
                                />
                                <CustomButton
                                    onClick={changeStateTask}
                                    useEditAnimation="true"
                                    useAnimation={true}
                                    isFull={false}
                                    text="Cancel"
                                    clas="cancelButton"
                                />
                            </div>
                        </div>

                    ) : (
                        <div className="flex items-center w-full gap-2">
                            <span>{t}</span>
                            <div className="ml-auto items-center">
                                <CustomButton
                                    onClick={() => removeTask(index)}
                                    useEditAnimation='true'
                                    useAnimation={true}
                                    isFull={false}
                                    text="Remove"
                                    clas="minus" />
                                <CustomButton
                                    onClick={() => editTask(t, index)}
                                    useEditAnimation={undefined}
                                    useAnimation={true}
                                    isFull={false}
                                    text="Edit"
                                    clas="minus" />
                            </div>
                        </div>
                    )}
                </li>
            ))}
        </ul>

    </>)
}