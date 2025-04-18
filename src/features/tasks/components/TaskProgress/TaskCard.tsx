import { Task, CSSProperties } from "../../../../types/index";

interface TaskCardProps {
    task: Task,
}

const getArrowStyles = (progressOrder: number): React.CSSProperties => {
    const justifyContentValue: 'flex-end' | 'space-between' =
        progressOrder === 1 ? 'flex-end' : 'space-between'
    return {
        ...commonLinkStyles,
        justifyContent: justifyContentValue,
    }
}
const TaskCard = ({ task }: TaskCardProps) => {
    return (
        <div style={styles.taskCard}>
            <div style={styles.icons}>
                <span className="material-icons">{task.progressOrder === 4 ? 'check_circle' : 'radio_button_unchecked'}</span>
                <span className="material-icons">more_vert</span>
            </div>
            <div style={styles.cardTitle}>
                {task.title}
            </div>
            <div style={styles.cardDetail}>
                {task.detail}
            </div>
            <div style={styles.cardDueDate}>
                Due On {task.dueDate}
            </div>
            <div style={getArrowStyles(task.progressOrder)}>
                {task.progressOrder !== 1 && (
                    <button className="material-icons">chevron_left</button>
                )}
                {task.progressOrder !== 4 && (
                    <button className="material-icons">chevron_right</button>
                )}
            </div>
        </div>
    );
}

const commonLinkStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px'
}

const styles: CSSProperties = {
    taskCard: {
        width: '100%',
        backgroundColor: '#383634',
        borderRadius: '20px',
        margin: '10px 0',
        border: '2px solid #ecf4d0',
    },
    icons: {
        ...commonLinkStyles,
    },
    cardTitle: {
        ...commonLinkStyles,
        fontSize: '22px',
    },
    cardDetail: {
        ...commonLinkStyles,
        fontSize: '15px',
    },
    cardDueDate: {
        ...commonLinkStyles,
        fontSize: '15px',
    },
}

export default TaskCard;