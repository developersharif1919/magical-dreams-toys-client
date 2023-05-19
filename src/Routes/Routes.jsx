import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AddAToy from "../Pages/AddAToy/AddAToy";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/SignUp',
            element: <SignUp></SignUp>
        },
        {
          path:'/AddAToy',
          element: <AddAToy></AddAToy>
        }
      ]
    },
  ]);


  export default router;