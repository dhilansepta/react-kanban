import { useRecoilValue } from 'recoil';
import type { Task, CSSProperties } from '../../../types/index';
import { uncompletedTasksSelector, completedTasksSelector } from '../TaskSelectors';

const TaskSummary = () => {
    const completedTasks = useRecoilValue<Task[]>(completedTasksSelector);
    const uncompletedTasks = useRecoilValue<Task[]>(uncompletedTasksSelector);

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Summary of Your Tasks</h1>
            <div style={styles.list}>
                <span className="material-icons">task_alt</span>
                <h2>You have completed {completedTasks.length} {" "} {completedTasks.length <= 1 ? "task" : "tasks"}</h2>
            </div>
            <div style={styles.list}>
                <span className="material-icons">assignment</span>
                <h2>You have {uncompletedTasks.length} uncompleted {uncompletedTasks.length <= 1 ? "task" : "tasks"}</h2>
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
    list: {
        width: '85%',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#383634',
        border: '2px solid #ecf4d0',
        borderRadius: '20px',
        gap: '10px',
    }
}

export default TaskSummary;