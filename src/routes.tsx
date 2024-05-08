import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./App";
import { FavoritePage } from "./pages/favorite/FavoritePage";
import Cars from "./pages/cars/ui/Cars";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
          {
            path: '/',
            element: <Navigate to='/catalog' replace />,
          },
          {
            path: '/catalog',
            element: <Cars />,
          },
          {
            path: '/favoriteCars',
            element: <FavoritePage />,
          },]
    },
])