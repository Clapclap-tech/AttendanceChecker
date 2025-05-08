import Header from './components/Header'
import Footer from './components/Footer'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import { BrowserRouter, createBrowserRouter, RouterProvider} from 'react-router-dom'
import FormInfo from './components/FormInfo'
import HomePage from './components/HomePage'
import ProfilePage from './components/ProfilePage'
import Class from './components/Class'
import Layout from './components/Sidebar/SidebarLayout'
import { ClassProvider } from './components/ClassContext'


function App() {
  const route = createBrowserRouter([
    {
      path:"/",
      element: <SignIn />,
    },
    {
      path:"/SignUp",
      element: <SignUp />,
    },
    {
      path:"/Form",
      element: <FormInfo />,
    },
    {
      path:"/HomePage",
      element: <Layout />
    },
    {
      path:"/ProfilePage",
      element: <ProfilePage />,
    },
    {
      path:"/Class",
      element: (
        <ClassProvider>
          <Class />
        </ClassProvider>
      ),
    },
  ]);
  return (
    <div className="App">
        <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App