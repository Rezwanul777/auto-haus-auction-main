
import { createBrowserRouter } from "react-router-dom";
import HowItWorks from "./pages/HowItWorks";
import Layout from "./components/Layout";
import Auth from "./pages/Auth";
import CarValuation from "./pages/CarValuation";
import Auctions from "./pages/Auctions";
import AuctionDetails from "./pages/AuctionDetails";
import CarListing from "./pages/CarListing";
import Dashboard from "./pages/Dashboard";
import Messages from "./pages/Messages";
import Economy from "./pages/Economy";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import Index from "./pages/Index";
import CarTest from "./pages/CarTest";
import Favorites from "./pages/Favorites";
//import CreateAdStepPage from "./components/support/steps/CreateAdStepPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "how-it-works",
        element: <HowItWorks />,
      },
      {
        path: "auth",
        element: <Auth />,
      },
      {
        path: "car-valuation",
        element: <CarValuation />,
      },
      {
        path: "car-test",
        element: <CarTest />,
      },
      // {
      //   path:"create-ad-steps",
      //   element: <CreateAdStepPage />
      // },
      {
        path: "auctions",
        element: <Auctions />,
      },
      {
        path: "auctions/:type",
        element: <AuctionDetails />,
      },
      {
        path: "auctions/:type/car/:id",
        element: <CarListing />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "economy",
        element: <Economy />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "support",
        element: <Support />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
    ],
    errorElement: <div>Page not found</div>,
  },
]);
