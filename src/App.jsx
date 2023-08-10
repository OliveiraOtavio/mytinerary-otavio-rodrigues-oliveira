// import Home from "./pages/Home";
// import MainLayout from "./layouts/MainLayout";
import { RouterProvider } from "react-router-dom";
import router from "./Router";

function App() {

  return (
    // <MainLayout>
    //   <Home />
    // </MainLayout>
    <RouterProvider router={router} />
  );
}

export default App;