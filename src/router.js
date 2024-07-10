import {createBrowserRouter} from "react-router-dom";
import {Blog, Detail, MovieList, TvList} from "./pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MovieList/>
    },
    {
        path: "/tv",
        element: <TvList/>
    },
    {
        path: "/blog",
        element: <Blog/>
    },
    {
        path: "/movie/:id",
        element: <Detail/>
    },
    {
        path: "/tv/:id",
        element: <Detail/>
    }
])

export default router;