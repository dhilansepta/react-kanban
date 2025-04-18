import type { CSSProperties, Task } from "../../../../types/index";
import TaskColumn from "./TaskColumn";
import {
    notStartedTasksSelector,
    inProgressTasksSelector,
    waitingTasksSelector,
    completedTasksSelector,
} from "../../TaskSelectors";
import { useRecoilValue } from "recoil";

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
                    columnTitle="Not Started"
                    tasks={notStartedTasks}
                />
                <TaskColumn
                    columnTitle="In Progress"
                    tasks={inProgressTasks}
                />
                <TaskColumn
                    columnTitle="Waiting/In Review"
                    tasks={waitingTasks}
                />
                <TaskColumn
                    columnTitle="Completed"
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