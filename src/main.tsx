import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import "@/styles/global.css";

import { router } from "@/router/Router";

const rootEl = document.getElementById("root");
if (!rootEl) throw new Error("Root element not found");

const root = ReactDOM.createRoot(rootEl);

root.render(<RouterProvider router={router} />);
