import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './routes/Home'
import { Dashboard } from './routes/Dashboard'
import { Missions } from './routes/Missions'
import { MissionDetail } from './routes/MissionDetail'
import { Leaderboard } from './routes/Leaderboard'
import { Profile } from './routes/Profile'
import { Wallet } from './routes/Wallet'
import { NotFound } from './routes/NotFound'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'missions',
        element: <Missions />,
      },
      {
        path: 'missions/:id',
        element: <MissionDetail />,
      },
      {
        path: 'leaderboard',
        element: <Leaderboard />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      {
        path: 'wallet',
        element: <Wallet />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
