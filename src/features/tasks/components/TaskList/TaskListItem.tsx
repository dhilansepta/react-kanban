import { useRecoilState } from "recoil";
import { TASK_PROGRESS_ID } from "../../../../constants/app";
import { Task, CSSProperties } from "../../../../constants/index";
import { tasksState } from "../../TaskAtoms";

interface TaskListItemProps {
    task: Task
}

const getProgressCategory = (progressOrder: number) => {
    switch (progressOrder) {
        case 1:
            return 'Not Started'
        case 2:
            return 'In Progress'
        case 3:
            return 'In Review'
        case 4:
            return 'Completed'
        default:
            return 'Not Started'
    }
}

const circleType = (progressOrder: number): 'check_circle' | 'radio_button_unchecked' => {
    return (
        progressOrder === TASK_PROGRESS_ID.COMPLETED ? 'check_circle' : 'radio_button_unchecked'
    )
}



const TaskListItem = ({ task }: TaskListItemProps) => {
    const [tasks, setTasks] = useRecoilState<Task[]>(tasksState);

    const changeProgress = (taskId: number): void => {
        const updatedTasks: Task[] =
            tasks.map((task) =>
                task.id === taskId
                    ? { ...task, progressOrder: TASK_PROGRESS_ID.COMPLETED }
                    : task
            )
        setTasks(updatedTasks);
    }

    return (
        <div style={styles.tableBody}>
            <div style={styles.tableBodyTaskName}>
                <span className="material-icons" onClick={(): void => { changeProgress(task.id) }} style={{cursor:'pointer'}}>
                    {circleType(task.progressOrder)}
                </span>
                {task.title}
            </div>

            <div style={styles.tableBodyTaskDetail}>
                {task.detail}
            </div>

            <div style={styles.tableBodyTaskDueDate}>
                {task.dueDate}
            </div>

            <div style={styles.tableBodyTaskProgress}>
                {getProgressCategory(task.progressOrder)}
            </div>

            <div style={styles.tableBodyTaskAction}>
                <span className="material-icons">more_horiz</span>
            </div>
        </div>
    )
}

const commonLinkStyles: React.CSSProperties = {
    border: '1px solid #ecf4d0',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
}

const styles: CSSProperties = {
    tableBody: {
        display: 'flex',
        width: '100%',
        fontSize: '16px',
    },
    tableBodyTaskName: {
        ...commonLinkStyles,
        width: '20%',
    },
    tableBodyTaskDetail: {
        ...commonLinkStyles,
        width: '30%',
    },
    tableBodyTaskDueDate: {
        ...commonLinkStyles,
        width: '20%',
    },
    tableBodyTaskProgress: {
        ...commonLinkStyles,
        width: '20%',
    },
    tableBodyTaskAction: {
        ...commonLinkStyles,
        width: '10%',
    },
}

export default TaskListItem;