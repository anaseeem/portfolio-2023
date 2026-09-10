import RootLayoutV2 from "@/layouts/RootLayout";
import ProfilePage from "@/pages/Profilepage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import ProjectsPage from "@/pages/ProjectsPage";

import { createBrowserRouter, RouteObject } from "react-router-dom";
// import Homepage from "@/pages/Homepage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayoutV2 />,
    children: [
      {
        path: "/",
        element: <ProfilePage />,
      },
      // {
      //   path: "/home",
      //   element: <Homepage />,
      // },
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
];

export const router = createBrowserRouter(routes, {
  future: { v7_relativeSplatPath: true },
});
