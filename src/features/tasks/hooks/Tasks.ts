import { useRecoilState } from "recoil";
import { Task } from "../../../constants";
import { tasksState } from "../TaskAtoms";
import { TASK_PROGRESS_ID } from "../../../constants/app";

interface TasksActionType {
    changeProgress: (taskId: number) => void,
    moveLeft: (taskId: number) => void,
    moveRight: (taskId: number) => void,
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

    const moveRight = (taskId: number): void => {
        const updatedTask: Task[] = tasks.map((task: Task) =>
            task.id === taskId
                ? { ...task, progressOrder: task.progressOrder + 1 }
                : task
        )
        setTasks(updatedTask);
    }

    const moveLeft = (taskId: number): void => {
        const updatedTask: Task[] = tasks.map((task: Task) =>
            task.id === taskId
                ? { ...task, progressOrder: task.progressOrder - 1 }
                : task
        )
        setTasks(updatedTask);
    }

    return {
        changeProgress,
        moveLeft,
        moveRight,
    }
}
