import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./App";
import { FavoritePage } from "./pages/favorite-page/FavoritePage";
import { CatalogPage } from "./pages/catalog-page/ui/CatalogPage";

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
            element: <CatalogPage />,
          },
          {
            path: '/favoriteCars',
            element: <FavoritePage />,
          },]
    },
])