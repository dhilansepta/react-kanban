import React from "react";
import type { Task, CSSProperties } from "../../../../constants/index";
import { tasksState } from "../../TaskAtoms";
import { useRecoilValue } from "recoil";
import TaskListItem from "./TaskListItem";

const TaskList = () => {
    const tasks = useRecoilValue<Task[]>(tasksState);
    
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Your Tasks</h1>
            <div style={{ display: 'flex', gap: '10px' }}>
                <button style={styles.button}>
                    <span className="material-icons">add</span>
                    Add Task
                </button>
                <button style={styles.button}>
                    <span className="material-icons">filter_list</span>
                    Filter Task
                </button>
            </div>
            <div>
                <div style={styles.tableHead}>
                    <div style={styles.tableHeaderTaskName}>Task Name</div>
                    <div style={styles.tableHeaderDetail}>Detail</div>
                    <div style={styles.tableHeaderDueDate}>Due Date</div>
                    <div style={styles.tableHeaderProgress}>Progress</div>
                    <div style={styles.tableHeaderAction}>Action</div>
                </div>
                {tasks.map((task: Task) => {
                    return <TaskListItem task={task} key={task.id} />
                })}
            </div>
        </div>
    )
}

const commonLinkStyles: React.CSSProperties = {
    border: '1px solid #ecf4d0',
    padding: '20px',
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
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '16px',
        padding: '10px',
        gap: '10px',
        backgroundColor: '#f2d1ae',
        color: '#4a3217',
        boxShadow: '0px 2px 4px #ecf4d0',
        cursor: 'pointer',
    },
    tableHead: {
        marginTop: '10px',
        display: 'flex',
        fontSize: '22px',
        width:'100%',
        fontWeight: 'bold',
    },
    tableHeaderTaskName: {
        width: '20%',
        ...commonLinkStyles
    },
    tableHeaderDetail: {
        width: '30%',
        ...commonLinkStyles,
    },
    tableHeaderDueDate: {
        width: '20%',
        ...commonLinkStyles,
    },
    tableHeaderProgress: {
        width: '20%',
        ...commonLinkStyles,
    },
    tableHeaderAction: {
        width: '10%',
        ...commonLinkStyles,
    }
}

export default TaskList;