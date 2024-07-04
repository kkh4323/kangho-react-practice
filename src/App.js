import React from "react";
import Menu from "./components/Menu";
import {RouterProvider} from "react-router-dom";
import router from "./router";

const App = () => {
  return (
      <>
          <Menu/>
          <RouterProvider router={router}/>
      </>
  )
}

export default App;