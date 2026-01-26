import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import { Home } from "./Pages/Home";
import { FetchOld } from "./Pages/FetchOld";
import { FetchRQ } from "./Pages/FetchRQ";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import "./App.css";
import { FetchInd } from "./components/UI/FetchInd";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/trad",
        element: <FetchOld />,
      },
      {
        path: "/rq",
        element: <FetchRQ />,
      },
      {
        path: "/rq/:id",
        element: <FetchInd />,
      },
    ],
  },
]);
const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
