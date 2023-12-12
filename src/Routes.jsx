import MainLyt from "./Layouts";
import Error404 from "./pages/Error/404";
import Home from "./pages/Home";

const Routes = [
  {
    path: "/",
    element: <MainLyt />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
];

export default Routes;
