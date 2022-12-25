import React from "react";
import { Route, RouterProvider, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import routes from "./router";

export default function App () {

    return (
        <div className="App"> 
            <Navbar />
            <Routes>
                {routes.map(route => {
                    return <Route key={route.element} path={route.path} element={route.element} exact={route.exact} />
                })}
            </Routes>
        </div>
    )
}