import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./sections/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./sections/Body";
import Error from "./components/Error";
import CalenderProvider from "./context/CalenderContext";

const AppLayout = () => {
  return (
    <>
      <CalenderProvider>
        <Header />
        <Body />
      </CalenderProvider>
    </>
  );
};

const creatingRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={creatingRouter} />);
