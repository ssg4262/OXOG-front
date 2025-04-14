import {MainHome} from "@/pages/main/MainHome.tsx";
import {RouteObject} from "react-router-dom";

export const mainRouter : RouteObject[]  = [
    { path: "/", element: <MainHome /> },
    { path: "/:serverId", element: <MainHome /> }
]