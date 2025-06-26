import { Navigate, RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import GameDetails from "../pages/Games/GameDetails";
import Login from "../pages/Admin/Login";
import { AdminRoute } from "../components/AdminRoute";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import AdminLayout from "../layouts/AdminLayout";
import Games from "../pages/Admin/Games/Games";

export const ROUTES = {
  HOME: "/",
  GAMEDETAILS: "/games/:id",
  LOGIN: "/login",
  ADMIN: "/admin",
  ADMIN_GAMES: "/admin/games",
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
    path: ROUTES.ADMIN,
    element: (
      <AdminRoute>
        <AdminLayout>
          <AdminDashboard />
        </AdminLayout>
      </AdminRoute>
    ),
  },
  {
    path: ROUTES.ADMIN_GAMES,
    element: (
      <AdminRoute>
        <AdminLayout>
          <Games />
        </AdminLayout>
      </AdminRoute>
    ),
  },
  {
    path: "*",
    element: <Navigate to={ROUTES.HOME} replace />,
  },
];

export default routes;
