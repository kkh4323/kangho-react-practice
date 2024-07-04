import {createBrowserRouter} from "react-router-dom";
import {MovieList, TvList} from "./components";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MovieList/>
    },
    {
        path: "/tv",
        element: <TvList/>
    }
])

export default router;