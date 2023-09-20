import React from "react";
import ReactDOM from "react-dom/client";

import HeaderComponent from "../components/Header";
import Body from "../components/Body"
import Footer from "../components/Footer"
import About from "../components/About";
import Error from "../components/Error";
import RestaurantMenu from "../components/RestaurantMenu";
import { Contact } from "../components/Contact";

import {RouterProvider, createBrowserRouter, Outlet} from "react-router-dom"


/**
       1. HEADER
          -LOGO = title
          -NAV ITEMS
          -CART
       2. BODY
          -SEARCH
          -REST LIST
          -REST CARD
              -IMAGE
              -NAME
              -RATING
              -CUISINS
        3. FOOTER
      **/




const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet/>
      <Footer />
    </>
  );
};


const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    errorElement: <Error/>,
    children:[{
      path: "/",
      element: <Body/>
    },{
      path: "/about",
      element: <About/>
    },{
      path: "/contact",
      element: <Contact/>
    },{
      path: "/restaurant/:id",
      element: <RestaurantMenu/>
    }
  ]
  }
  
])





//With root we can select which element should be used as root in code
const root = ReactDOM.createRoot(document.getElementById("root")); //when we will be modifying data on DOM then need to use ReactDOM

//root.render(heading); // we are putting a react element inside root
root.render(<RouterProvider router={appRouter} />);
