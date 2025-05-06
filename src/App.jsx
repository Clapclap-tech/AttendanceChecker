import Header from './components/Header'
import Footer from './components/Footer'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import { BrowserRouter, createBrowserRouter, RouterProvider} from 'react-router-dom'
import FormInfo from './components/FormInfo'
import HomePage from './components/HomePage'
import Layout from './components/SidebarLayout'


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
      element: (
      <Layout>
        <HomePage />,
        </Layout>
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