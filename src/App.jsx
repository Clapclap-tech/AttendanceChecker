import Header from './components/Header'
import Footer from './components/Footer'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import { BrowserRouter, createBrowserRouter, RouterProvider} from 'react-router-dom'

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
  ]);
  return (
    <div className="App">
        <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App