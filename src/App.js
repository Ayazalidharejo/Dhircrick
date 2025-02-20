import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {store} from "./Store/Store"
import "./App.css"
import { Helmet } from 'react-helmet';

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
import Favirate from "./Components/Faviratepage/Favirate";
import Compare from "./Components/Comparepage/Compare";
import ProductGrid from "./Components/Products/Products";
import Shop from "./Components/Shop/Shop";
import Deshboard from "./Components/Dashboard/Deshboard";
import Privacy from "./Components/PrivtyPolice/Privacy";
import Scrollbar from "./Components/Scrollbar/Scrollbar";
import Turms from "./Components/Turms/Turms";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: ( <><Scrollbar/> < NavigationBar /></>)  ,

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
          path: "/Compare",
         
          element:  <Compare />   ,
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
        {
          path: "/Favirate",
         
          element:  <Favirate />   ,
        },
        {
          path: "/ProductGrid",
         
          element:  <ProductGrid />   ,
        },
  
        {
          path: "/Shop",
         
          element:  <Shop />   ,
        },
        {
          path: "/Deshboard",
         
          element:  <Deshboard />   ,
        },
        {
          path: "/Privacy",
         
          element:  <Privacy />   ,
        },
        {
          path: "/Turms",
         
          element:  <Turms />   ,
        },
  
        
       
      ],
    },
  ]);

  return (
    <div className="App">
      <Helmet>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" />
      </Helmet>
      <Provider store={store}>
        <RouterProvider router={router} />
        
      </Provider>
    
    </div>
  );
}

export default App;
