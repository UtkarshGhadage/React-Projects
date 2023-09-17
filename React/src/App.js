import React from "react";
import ReactDOM from "react-dom/client";

import HeaderComponent from "../components/Header";
import Body from "../components/Body"
import Footer from "../components/Footer"


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
      <Body />
      <Footer />
    </>
  );
};




//With root we can select which element should be used as root in code
const root = ReactDOM.createRoot(document.getElementById("root")); //when we will be modifying data on DOM then need to use ReactDOM

//root.render(heading); // we are putting a react element inside root
root.render(<AppLayout />);
