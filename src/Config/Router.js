import { useState, createContext } from "react";
import {
    createBrowserRouter,
} from "react-router-dom";

import Todo from "../Page/Todo";
import Login from "../Page/Login";



export const router = createBrowserRouter([
    {
        path: "/Todo",
        element: <Todo/>
    },
    {
        path: "/",
        element: <Login/>
    },
   
]);