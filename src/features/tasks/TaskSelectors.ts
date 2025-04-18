import { selector } from "recoil";
import { Task } from "../../types/index";
import { tasksState } from "./TaskAtoms";

export const uncompletedTasksSelector = selector<Task[]>({
    key: 'uncompleted_tasks',
    get: ({ get }) => {
        return get(tasksState).filter((tasks) => {
            return tasks.progressOrder !== 4
        })
    },
})

export const notStartedTasksSelector = selector<Task[]>({
    key: 'notstarted_tasks',
    get: ({ get }) => {
        return get(tasksState).filter((tasks) => {
            return tasks.progressOrder === 1
        })
    }
})

export const inProgressTasksSelector = selector<Task[]>({
    key: 'inprogress_tasks',
    get: ({ get }) => {
        return get(tasksState).filter((tasks) => {
            return tasks.progressOrder === 2
        })
    }
})

export const waitingTasksSelector = selector<Task[]>({
    key: 'waiting_tasks',
    get: ({ get }) => {
        return get(tasksState).filter((tasks) => {
            return tasks.progressOrder === 3
        })
    }
})

export const completedTasksSelector = selector<Task[]>({
    key: 'completed_tasks',
    get: ({ get }) => {
        return get(tasksState).filter((tasks) => {
            return tasks.progressOrder === 4
        })
    }
})