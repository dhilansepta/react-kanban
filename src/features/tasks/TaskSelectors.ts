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

export const completedTasksSelector = selector<Task[]>({
    key: 'completed_tasks',
    get: ({ get }) => {
        return get(tasksState).filter((tasks) => {
            return tasks.progressOrder === 4
        })
    }
})