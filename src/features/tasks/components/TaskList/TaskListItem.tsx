import { Task, CSSProperties } from "../../../../constants/index";
import { TASK_PROGRESS_ID, TASK_PROGRESS_STATUS } from "../../../../constants/app";
interface TaskListItemProps {
    task: Task
}

const getProgressCategory = (progressOrder: number) => {
    switch (progressOrder) {
        case TASK_PROGRESS_ID.NOT_STARTED:
            return TASK_PROGRESS_STATUS.NOT_STARTED
        case TASK_PROGRESS_ID.IN_PROGRESS:
            return TASK_PROGRESS_STATUS.IN_PROGRESS
        case TASK_PROGRESS_ID.WAITING:
            return TASK_PROGRESS_STATUS.WAITING
        case TASK_PROGRESS_ID.COMPLETED:
            return TASK_PROGRESS_STATUS.COMPLETED
        default:
            return TASK_PROGRESS_STATUS.NOT_STARTED
    }
}

const TaskListItem = ({ task }: TaskListItemProps) => {
    return (
        <div style={styles.tableBody}>
            <div style={styles.tableBodyTaskName}>
                <span className="material-icons">
                    {task.progressOrder === TASK_PROGRESS_ID.COMPLETED ? 'check_circle' : 'radio_button_unchecked'}
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