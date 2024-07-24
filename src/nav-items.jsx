import { Home, Presentation } from "lucide-react";
import Index from "./pages/Index.jsx";
import Slideshow from "./components/Slideshow.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "AI Origins",
    to: "/ai-origins",
    icon: <Presentation className="h-4 w-4" />,
    page: <Slideshow />,
  },
];