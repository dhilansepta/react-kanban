import type { CSSProperties, Task } from "../../../../constants/index";
import TaskColumn from "./TaskColumn";
import {
    notStartedTasksSelector,
    inProgressTasksSelector,
    waitingTasksSelector,
    completedTasksSelector,
} from "../../TaskSelectors";
import { useRecoilValue } from "recoil";
import { TASK_PROGRESS_STATUS } from "../../../../constants/app";

const TaskProgress = () => {
    const notStartedTasks: Task[] = useRecoilValue(notStartedTasksSelector);
    const inProgressTasks: Task[] = useRecoilValue(inProgressTasksSelector);
    const waitingTasks: Task[] = useRecoilValue(waitingTasksSelector);
    const completedTask: Task[] = useRecoilValue(completedTasksSelector);

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Task Progress</h1>
            <div style={styles.taskCategories}>
                <TaskColumn
                    columnTitle={TASK_PROGRESS_STATUS.NOT_STARTED}
                    tasks={notStartedTasks}
                />
                <TaskColumn
                    columnTitle={TASK_PROGRESS_STATUS.IN_PROGRESS}
                    tasks={inProgressTasks}
                />
                <TaskColumn
                    columnTitle={TASK_PROGRESS_STATUS.WAITING}
                    tasks={waitingTasks}
                />
                <TaskColumn
                    columnTitle={TASK_PROGRESS_STATUS.COMPLETED}
                    tasks={completedTask}
                />
            </div>
        </div>
    )
}

const styles: CSSProperties = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        gap: '10px',
        width: '100%',
    },
    heading: {
        fontSize: '30px',
        color: '#f2d1ae',
    },
    taskCategories: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
}

export default TaskProgress;