import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import TopNavigation from "./components/TopNavigation";

import HomePage from './pages/Home'
import DetailPage from './pages/Detail'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <TopNavigation />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "detail",
          element: <DetailPage />,
        },
      ]
    },
  ]);

  return <RouterProvider router={router} />
}

export default App