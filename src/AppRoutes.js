import { Counter } from "./pages/Counter";
import { FetchData } from "./pages/FetchData";
import { Home } from "./pages/Home";
import LogIn from "./pages/LogIn";
import Opportunities from "./pages/Opportunities";
import SignUp from "./pages/SignUp";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/sign-up',
    element: <SignUp />
  },
  {
    path: '/log-in',
    element: <LogIn />
  }
];

export default AppRoutes;
