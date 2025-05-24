import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import FormInfo from "./components/FormInfo";
import ProfilePage from "./components/ProfilePage";
import Class from "./components/Class";
import { ClassProvider } from "./components/ClassContext";
import MainLayout from "./components/MainLayout";
function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />, 
      children: [
        { index: true, element: <LandingPage /> }, 
        { path: "Form", element: <FormInfo /> },
        { path: "ProfilePage", element: <ProfilePage /> },
        { path: "Class", element: ( <ClassProvider> <Class /> </ClassProvider> ), },
      ],
    },
    {
      path: "/SignIn",
      element: <SignIn />,
    },
    {
      path: "/SignUp",
      element: <SignUp />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
