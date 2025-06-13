import { Navigate, RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import GameDetails from "../pages/Games/GameDetails";
import Login from "../pages/Admin/Login";

export const ROUTES = {
  HOME: "/",
  GAMEDETAILS: "/games/:id",
  LOGIN: "/login",
};

const routes: RouteObject[] = [
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.GAMEDETAILS,
    element: <GameDetails />,
  },
  {
    path: ROUTES.LOGIN,
    element: <Login />,
  },
  {
    path: "*",
    element: <Navigate to={ROUTES.HOME} replace />,
  },
];

export default routes;
