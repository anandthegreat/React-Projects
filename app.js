import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Contact from "./src/components/Contact";
import About from "./src/components/About";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
    return (<div className="app">
        <Header/>

        {/* Will be filled with the child component acc to the path*/}
        <Outlet/>  
    
    </div>)
};

// Create the list of data router objects
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            },
            {
                path: "/restaurants/:id",
                element: <RestaurantMenu/>

            }
        ],
        errorElement: <Error/>,
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);