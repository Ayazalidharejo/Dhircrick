import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {store} from "./Store/Store"


import { Provider } from "react-redux";
import Mainepage from "./Components/MainehomeSection/Parentmainesection";
import NavigationBar from "./Components/Layout/Layout";


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
       
       
      
       
        // {
        //   path: "/About",
      
        //   element:  <AboutUs />   ,
        // },
        // {
        //   path: "/Contact",
         
        //   element:  <ContactForm />   ,
        // },
   
        
       
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
