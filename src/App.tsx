import { JSX } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SideMenuLayout from './layouts/SideMenuLayout'
import TaskProgress from './features/tasks/components/TaskProgress/TaskProgress'
import { RecoilRoot } from 'recoil'
import TaskSummary from './features/tasks/components/TaskSummary'
import TaskList from './features/tasks/components/TaskList/TaskList'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SideMenuLayout />,
    children: [
      {
        path: '/',
        element: <TaskSummary />,
      },
      {
        path: '/task-list',
        element: <TaskList />,
      },
      {
        path: '/task-progress',
        element: <TaskProgress />,
      }
    ],
  },
])

function App(): JSX.Element {

  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  )
}

export default App
