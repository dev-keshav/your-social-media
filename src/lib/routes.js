import { createBrowserRouter } from "react-router-dom";

import Login from "components/auth/Login";
import Register from "components/auth/Register";
import Layout from "components/layout";
import Dashboard from "components/dashboard";
import Comments from "components/comments";
import Profile from "components/profile";
import Users from "components/users";
import Page404 from "components/page404";
import FirstPage from "components/firstPage";
import Sidebar from "components/layout/Sidebar";
import SmallSidebar from "components/layout/SmallSidebar";

export const ROOT = "/";
export const PAGENOTFOUND = "*";
export const LOGIN = "/login";
export const REGISTER = "/register";

export const PROTECTED = "/protected";
export const DASHBOARD = "/protected/dashboard";
export const USERS = "/protected/users";
export const SIDEBAR = "/protected/sidebar";
export const PROFILE = "/protected/profile/:id";
export const COMMENTS = "/protected/comments/:id";

export const router = createBrowserRouter([
  { path: ROOT, element: <FirstPage /> },
  { path: PAGENOTFOUND, element: <Page404 />},
  { path: LOGIN, element: <Login /> },
  { path: REGISTER, element: <Register /> },
  {
    path: PROTECTED,
    element: <Layout />,
    children: [
      {
        path: DASHBOARD,
        element: <Dashboard />,
      },
      {
        path: SIDEBAR,
        element: <SmallSidebar />
      },
      {
        path: USERS,
        element: <Users />,
      },
      {
        path: PROFILE,
        element: <Profile />,
      },
      {
        path: COMMENTS,
        element: <Comments />,
      },
    ],
  },
]);
