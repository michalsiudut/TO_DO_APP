import { CustomButton } from "../Buttons";

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
        <ul className='taskList'>
            {tasks.map((t: string, index: number) => (
                <li key={index} className={`taskItem ${animatingCancelIndex == index ? 'crash' : ''}  ${editAnimationIndex == index ? 'edit' : ''} ${saveAnimationIndex == index ? 'save' : ''}`}>
                    <span className='taskLabel'>Task {index + 1}</span>
                    {editedIndex === index ? (
                        <>
                            <input
                                className='inputEdit'
                                value={editedText}
                                onChange={setEditedTextHandler}
                            />
                            <CustomButton
                                onClick={() => saveTask(index)}
                                useEditAnimation='true'
                                useAnimation={useAnimation}
                                isFull={isFull}
                                text="Save"
                                clas="saveButton" />
                            <CustomButton
                                onClick={changeStateTask}
                                useEditAnimation='true'
                                useAnimation={true}
                                isFull={false}
                                text="Cancel"
                                clas="cancelButton" />
                        </>
                    ) : (
                        <>
                            <span>{t}</span>
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
                        </>
                    )}
                </li>
            ))}
        </ul>

    </>)
}