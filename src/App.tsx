import { JSX } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SideMenuLayout from './layouts/SideMenuLayout'
import Home from './pages/Home'
import TaskList from './pages/TaskList'
import TaskProgress from './pages/TaskProgress'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SideMenuLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/task-list',
        element: <TaskList />,
      },
      {
        path: '/task-progress',
        element:<TaskProgress />,
      }
    ],
  },
])

function App(): JSX.Element {

  return <RouterProvider router={router}/>
}

export default App
