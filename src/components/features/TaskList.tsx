import { useTasks } from "@/hooks/useTasks";
import { CustomButton } from "../Buttons";

export const TaskList = () => {

    const {
        task, tasks, removeTask,
        editedIndex, editTask, changeStateTask, setEditedTextHandler,
        saveTask, editedText, useAnimation, isFull, animatingCancelIndex, editAnimationIndex,
        saveAnimationIndex
    } = useTasks();


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