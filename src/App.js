import React, { Suspense, lazy } from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
// import About from "./components/About"
import Contact from "./components/Contact"
import ProfileFunctional from "./components/ProfileFunctional"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import RestaurantMenu from "./components/RestaurantMenu"
import ProfileClass from "./components/ProfileClass"
import Shimmer from "./components/Shimmer"
import { Provider } from "react-redux"
import store from "./utils/store"
// import Instamart from "./components/Instamart"

const Instamart = lazy(() => import("./components/Instamart"))
const About = lazy(() => import("./components/About"))

/*
 * Lazy Loading
 * Chunking
 * Code Splitting
 * Dynamic Bundling
 * Dynamic Importing
 * On Demand Loading
 */

const AppLayout = () => {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            // element: <ProfileFunctional />,
            element: <ProfileClass />,
          },
        ],
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)
