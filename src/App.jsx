import Header from './components/Header'
import Footer from './components/Footer'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import { BrowserRouter, createBrowserRouter, RouterProvider} from 'react-router-dom'
import FormInfo from './components/FormInfo'

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
  ]);
  return (
    <div className="App">
        <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App