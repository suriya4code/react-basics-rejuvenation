
import './App.css'
import './styles/inprogress.css'
import Navbar from './components/Navbar'
import MainPage from './Layout/Main'
import InProgress from './Pages/Inprogress'
import RJ_ReducerTrail from './Pages/rj_reducers'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RjContext from './Pages/rj_context'

function App() {

  //create router

  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainPage />,
    },
    {
      path: '/rj-context',
      element: <RjContext />,  

    },
    {
      path: '/rj-reducer',
      element: <RJ_ReducerTrail />,  

    },
    {
      path: '/inprogress',
      element: <InProgress />,
    },

  ])

  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  )
}

export default App
