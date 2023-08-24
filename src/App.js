import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./sections/Header";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./sections/Body";

const AppLayout = () => {
  return (
    <> 
    <main>
       <Header />
        <Body/>
          
      </main>     
         
    </>
  );
};

const creatingRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      

     
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={creatingRouter} />);
