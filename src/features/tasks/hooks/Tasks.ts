import { useRecoilState } from "recoil";
import { Task } from "../../../constants";
import { tasksState } from "../TaskAtoms";
import { TASK_PROGRESS_ID } from "../../../constants/app";

interface TasksActionType {
    changeProgress: (taskId: number) => void
}
export function useTasksAction(): TasksActionType {
    const [tasks, setTasks] = useRecoilState<Task[]>(tasksState);

    const changeProgress = (taskId: number): void => {
        const updatedTask: Task[] =
            tasks.map((task: Task) =>
                task.id === taskId
                    ? { ...task, progressOrder: TASK_PROGRESS_ID.COMPLETED }
                    : task
            )
        setTasks(updatedTask);
    }

    return {
        changeProgress,
    }
}
