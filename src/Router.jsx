import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Cities from "./pages/Cities";
import CityDetail from "./pages/CityDetail";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/index", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/cities", element: <Cities /> },
      { path: "/city/:city_id", element: <CityDetail /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },      
      { path: "/*", element: <NotFound /> },      
    ],
  },
]);

export default router;
