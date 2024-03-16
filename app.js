import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./src/components/header"
import Body from "./src/components/body";
import { createBrowserRouter, RouterProvider , Outlet } from "react-router-dom";
// import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/error";
import Resinfo from "./src/components/resinfo";

const About = lazy(()=>import("./src/components/About"))

const App = () => {
  return (
    <div className="main">
      <Header />
      <Outlet />
    </div>
  );
};

const approuter=createBrowserRouter(
  [
    {
      path:"/",
      element:<App/>,
      errorElement:<Error/>,
      children:[
        {
          path:"/",
          element:<Body/>
      },
        {
            path:"/resinfo/:resid",
            element:<Resinfo/>
        },
        {
          path:"/about",
          element:<Suspense fallback={<h1>wait its here</h1>}><About/></Suspense>
        },
        {
          path:"/contact",
          element:<Contact/>
        }
      ]
    },
    
  ]
)





const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter}/>);
