import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import AddAToy from "../Pages/AddAToy/AddAToy";
import AllToys from "../Pages/All Toys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
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
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/SignUp',
        element: <SignUp></SignUp>
      },
      {
        path: '/AddAToy',
        element: <AddAToy></AddAToy>
      },
      {
        path: '/AllToys',
        element: <AllToys></AllToys>,
        loader: () => fetch('http://localhost:5000/alltoys')
      },
      {
        path: '/ToyDetails/:id',
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/alltoys/${params.id}`)
      },
      {
        path: '/MyToys',
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        )
      }
    ]
  },
]);


export default router;