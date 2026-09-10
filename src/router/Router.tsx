import RootLayoutV2 from "@/layouts/RootLayoutV2";
import ProfilePage from "@/pages/Profilepage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import ProjectsPage from "@/pages/ProjectsPage";

import { createBrowserRouter, RouteObject } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayoutV2 />,
    children: [
      {
        path: "/",
        element: <ProfilePage />,
      },
      {
        path: "/about-me",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
    ],
  },
] as RouteObject[]);
