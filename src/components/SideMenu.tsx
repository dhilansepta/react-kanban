import React from 'react'
import { CSSProperties } from '../types/index'
import { NavLink } from 'react-router-dom'

const SideMenu = () => {
    return (
        <div style={styles.container}>
            <NavLink to="/" style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
                <span className='material-icons' style={styles.icon}>
                    home
                </span>
                <p style={styles.text}>Home</p>
            </NavLink>
            <NavLink to="/task-list" style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
                <span className='material-icons' style={styles.icon}>
                    list
                </span>
                <p style={styles.text}>Task List</p>
            </NavLink>
            <NavLink to="/task-progress" style={({ isActive }) => (isActive ? styles.activeLink : styles.link)}>
                <span className='material-icons' style={styles.icon}>
                    check_box
                </span>
                <p style={styles.text}>Task Progress</p>
            </NavLink>
        </div>
    )
}

const commonLinkStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textDecoration: 'none',
    gap: '10px',
    padding: '10px',
}

const styles: CSSProperties = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        width: '20vw',
        height: '100vh',
        backgroundColor: '#f2d1ae',
    },
    link: {
        ...commonLinkStyles,
    },
    activeLink: {
        ...commonLinkStyles,
        fontWeight: 'bold',
        backgroundColor: '#ecf4d0',
    },
    text: {
        fontSize: '20px',
        color: '#4a3217',
    },
    icon: {
        fontSize: '30px',
        color: '#4a3217',
    }
}

export default SideMenu