import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {store} from "./Store/Store"


import { Provider } from "react-redux";
import Mainepage from "./Components/MainehomeSection/Parentmainesection";
import NavigationBar from "./Components/Layout/Layout";
import HomeKitchen from "./Components/Homeandkichen/Homeandkichen";
import Officeproducts from "./Components/Officeproduct/Officeproducts";
import Toyandgames from "./Components/Toyandgames/Toyandgames";
import Petsuplince from "./Components/Petsuplince/Petsuplince";
import Beautyproduct from "./Components/Beautyproduct/Beautyproduct";
import Babyproduct from "./Components/Babyproduct/Babyproduct";
import Grocerygourmet from "./Components/Grocerygourmet/Grocerygourmet";
import ToolsImprovement from "./Components/ToolsImprovement/ToolsImprovement";
import Sportsandoutdoor from "./Components/SportsandOutdoor/Sportsandoutdoor";
import Lawnpatioparden from "./Components/Lawnpatioparden/Lawnpatioparden";
import Supplements from "./Components/Supplements/Supplements";
import AboutUs from "./Components/About_us/Aboutus";
import ReturnPolicy from "./Components/Returnpolicy/Returnpolicy";
import ContactForm from "./Components/Contectuspage/ContactForm";
import Signup from "./Components/Outh/Signup";
import Signin from "./Components/Outh/Signin";
import Checkout from "./Components/Checkoutpage/Checkout";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:   < NavigationBar /> ,
      errorElement: <> <h1> error </h1> </>,
      children: [
        {
          path: "",
          element:  <Mainepage /> ,
        },
         {
          path: "/HomeKitchen",
      
          element:  <HomeKitchen />   ,
        },
        {
          path: "/Officeproducts",
         
          element:  <Officeproducts />   ,
        },
        {
          path: "/Toyandgames",
         
          element:  <Toyandgames />   ,
        },
        {
          path: "/Petsuplince",
         
          element:  <Petsuplince />   ,
        },
        {
          path: "/Beautyproduct",
         
          element:  <Beautyproduct />   ,
        },
   
        {
          path: "/Babyproduct",
         
          element:  <Babyproduct />   ,
        },
   
        {
          path: "/Grocerygourmet",
         
          element:  <Grocerygourmet />   ,
        },
        {
          path: "/ToolsImprovement",
         
          element:  <ToolsImprovement />   ,
        },
        {
          path: "/Sportsandoutdoor",
         
          element:  <Sportsandoutdoor />   ,
        },
        {
          path: "/Lawnpatioparden",
         
          element:  <Lawnpatioparden />   ,
        },
        {
          path: "/Supplements",
         
          element:  <Supplements />   ,
        },
   
        {
          path: "/AboutUs",
         
          element:  <AboutUs />   ,
        },
   
        {
          path: "/ReturnPolicy",
         
          element:  <ReturnPolicy />   ,
        },
        {
          path: "/ContactForm",
         
          element:  <ContactForm />   ,
        },
        {
          path: "/Signup",
         
          element:  <Signup />   ,
        },
        {
          path: "/Signin",
         
          element:  <Signin />   ,
        },
        {
          path: "/Checkout",
         
          element:  <Checkout />   ,
        },
   
        
       
      ],
    },
  ]);

  return (
    <div className="App">
    
      <Provider store={store}>
        <RouterProvider router={router} />
        
      </Provider>
    
    </div>
  );
}

export default App;
