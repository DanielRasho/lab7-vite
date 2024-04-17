import { useState, useEffect} from "react";
import Login from "../views/Login";
import Home from "../views/Home";

const VIEW_ROUTES = Object.freeze({
  LOGIN: "/login",
  HOME: "/",
});

// App Router, responsable of changin vue
function Router() {

    const [currentRoute, setCurrentRoute] = useState("app")

    useEffect(() => {
      setCurrentRoute(window.location.pathname)
      console.log(window.location);
  
    }, [])

  switch (currentRoute) {
    case VIEW_ROUTES.LOGIN:
      return <Login />;
    case VIEW_ROUTES.HOME:
      return <Home />;
    default:
      return <Home />;
  }
}

export {VIEW_ROUTES, Router}