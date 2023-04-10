import React from "react";
import App from "./App";
import UserProvider from "./src/Context/Provider";

function Router(){
    return(
         <UserProvider>
             <App />
         </UserProvider>
        
    )
}
export default Router;