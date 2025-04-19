import { selector } from "recoil";
import { Task } from "../../constants/index";
import { tasksState } from "./TaskAtoms";
import { SelectorKeys } from "../../constants/recoilKeys";
import { TASK_PROGRESS_ID } from "../../constants/app";

export const uncompletedTasksSelector = selector<Task[]>({
    key: SelectorKeys.UNCOMPLETED_TASKS,
    get: ({ get }) => {
        return get(tasksState).filter((tasks) => {
            return tasks.progressOrder !== TASK_PROGRESS_ID.COMPLETED
        })
    },
})

export const notStartedTasksSelector = selector<Task[]>({
    key: SelectorKeys.NOT_STARTED_TASKS,
    get: ({ get }) => {
        return get(tasksState).filter((tasks) => {
            return tasks.progressOrder === TASK_PROGRESS_ID.NOT_STARTED
        })
    }
})

export const inProgressTasksSelector = selector<Task[]>({
    key: SelectorKeys.IN_PROGRESS_TASKS,
    get: ({ get }) => {
        return get(tasksState).filter((tasks) => {
            return tasks.progressOrder === TASK_PROGRESS_ID.IN_PROGRESS
        })
    }
})

export const waitingTasksSelector = selector<Task[]>({
    key: SelectorKeys.WAITING_TASKS,
    get: ({ get }) => {
        return get(tasksState).filter((tasks) => {
            return tasks.progressOrder === TASK_PROGRESS_ID.WAITING
        })
    }
})

export const completedTasksSelector = selector<Task[]>({
    key: SelectorKeys.COMPLETED_TASKS,
    get: ({ get }) => {
        return get(tasksState).filter((tasks) => {
            return tasks.progressOrder === TASK_PROGRESS_ID.COMPLETED
        })
    }
})