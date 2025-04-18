import { JSX } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SideMenuLayout from './layouts/SideMenuLayout'
import TaskList from './pages/TaskList'
import TaskProgress from './pages/TaskProgress'
import { RecoilRoot } from 'recoil'
import TaskSummary from './features/tasks/components/TaskSummary'

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
