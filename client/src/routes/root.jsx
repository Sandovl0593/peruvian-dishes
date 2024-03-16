import { Home } from "../views/Home";
import { Demo } from "../views/Demo";
import { Documentation } from "../views/Documentation";

const router = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/demo",
    element: <Demo />,
  },
  {
    path: "/docs",
    element: <Documentation />,
  },
];

export default router;
