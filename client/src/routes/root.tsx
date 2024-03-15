import { Home } from "../views/Home";
import { About } from "../views/About";

const router = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
];

export default router;
