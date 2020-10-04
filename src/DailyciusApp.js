import React from "react";
import AppRoutes from "./routes/AppRoutes";
import { Provider } from "react-redux";

import { store } from "./store/store";
import "./App.scss";


const DailyciusApp = () => {


  return(
    <Provider store={store}>
      <AppRoutes /> 
    </Provider>
  )
}
export default DailyciusApp;
