import { Task, CSSProperties } from "../../../../constants/index";
import TaskCard from "./TaskCard";

interface TaskColumnProps {
    tasks: Task[],
    columnTitle: string
}
const TaskColumn = ({ columnTitle, tasks }: TaskColumnProps) => {
    return (
        <div style={styles.categoryColumn}>
            <div style={styles.header}>
                <h2>{columnTitle}</h2>
                <span className="material-icons">add_circle</span>
            </div>

            {tasks.map((task: Task) => {
                return <TaskCard key={task.id} task={task} />
            })}
        </div>
    );
}

const styles: CSSProperties = {
    categoryColumn: {
        display: 'flex',
        flexDirection: 'column',
        width: '25%',
        minHeight: '80vh',
        padding: '10px',
        borderRight: '1px dashed #ecf4d0',
        borderLeft: '1px dashed #ecf4d0'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}

export default TaskColumn;