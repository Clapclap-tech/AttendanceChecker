import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import FormInfo from "./components/FormInfo";
import ProfilePage from "./components/ProfilePage";
import Class from "./components/Class";
import Calendar from "./components/calendar";
import Task from "./components/Task";
import Attendance from "./components/Attendance"
import AttendanceHistory from "./components/AttendanceHistory"
import { ClassProvider } from "./components/ClassContext";
import MainLayout from "./components/MainLayout";

function App() {
  const route = createBrowserRouter([
    {
      path: "/LandingPage",
      element: <MainLayout />,
      children: [
        { index: true, element: <LandingPage /> },
        { path: "Form", element: <FormInfo /> },
        { path: "ProfilePage", element: <ProfilePage /> },
        {
          path: "Class",
          element: <Class />
        },
      ],
    },
    {
      path: "/",
      element: <SignIn />,
    },
    {
      path: "/SignUp",
      element: <SignUp />,
    },
    {
      path: "/Attendance",
      element: <Attendance />,
    },
    {
      path: "/AttendanceHistory",
      element: <AttendanceHistory />,
    },
    {
      path: "/Task/:id",
      element: <Task />,
    },
  ]);

  return (
    <div className="App">
      <ClassProvider>
        <RouterProvider router={route} />
      </ClassProvider>
    </div>
  );
}

export default App;
