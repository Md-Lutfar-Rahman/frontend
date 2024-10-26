import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Master from "./Layout/Master";
import Home from "./components/Home/Home";
import SingleCourse from "./components/Courses/Singlecourse";


const router = createBrowserRouter([
  {
    path: "/",
    element:<Master/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"singlecourse",
        element:<SingleCourse/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);