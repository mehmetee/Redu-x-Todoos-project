import React from "react";
import { Provider } from "react-redux";
import reducers from "./reducers";
import initialState from "./store";
import { legacy_createStore } from "@reduxjs/toolkit";

function useProvider({children}){
    const store=legacy_createStore(reducers,initialState)
    return <Provider store={store}>{children}</Provider>
}
export default useProvider;