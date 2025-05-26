import { Navigate, RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import GameDetails from "../pages/GameDetails";

export const ROUTES = {
  HOME: "/",
  GAMEDETAILS: "/games/:id",
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
    path: "*",
    element: <Navigate to={ROUTES.HOME} replace />,
  },
];

export default routes;
