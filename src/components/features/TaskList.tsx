import { CustomButton } from "../Button";
import { useTaskStore } from "@/store/taskStore";


export const TaskList = () => {

    const tasks = useTaskStore((state) => state.tasks);
    const removeTask = useTaskStore((state) => state.removeTask);
    const editedIndex = useTaskStore((state) => state.editedIndex);
    const editTask = useTaskStore((state) => state.editTask);
    const changeStateTask = useTaskStore((state) => state.changeStateTask);
    const setEditedTextHandler = useTaskStore((state) => state.setEditedTextHandler);
    const saveTask = useTaskStore((state) => state.saveTask);
    const editedText = useTaskStore((state) => state.editedText);

    return (<>
        <ul className='mx-auto space-y-2 mt-5'>
            {tasks.map((t: Task, index: number) => (
                <li key={index} className="p-3 rounded-2xl bg-[#121212] flex items-center w-xl">
                    <div className="flex flex-col items-start space-y-2">
                        <span className='mr-10 border-2 pl-1.5 rounded-2xl p-1 w-15 text-[12px] self-start'>Task {index + 1}</span>
                        <div className={
                            "border-2 rounded-2xl text-[12px] p-1.5 " +
                            (t.status === "Pending" ? "bg-amber-200 text-black"
                                : t.status === "To Do" ? "bg-blue-200 text-black"
                                    : t.status === "In Progress" ? "bg-red-200 text-black"
                                        : "")
                        }>
                            {t.status}
                        </div>
                    </div>
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
                            <span>{t.text}</span>
                            <div className="ml-auto items-center">
                                <CustomButton
                                    onClick={() => removeTask(index)}
                                    text="Remove" />
                                <CustomButton
                                    onClick={() => editTask(t.text, index)}
                                    text="Edit" />
                            </div>
                        </div>
                    )}
                </li>
            ))}
        </ul >

    </>)
}