import { Route, Routes, useLocation } from "react-router-dom";

// import Layouts
import MainLayout from "../layouts/MainLayout.jsx";

// import pages
import About from "../pages/About.jsx";
import Skill from "../pages/Skill.jsx";
import SkillSample from "../pages/SkillSample.jsx";
import Contact from "../pages/Contact.jsx";
import NotFound from "../pages/NotFound.jsx";

import { AnimatePresence } from "framer-motion";

/* -------------------------------------------------------------------------- */
/*                                   Routes                                   */
/* -------------------------------------------------------------------------- */

export const routes = [
  {
    layout: MainLayout,
    routes: [
      {
        name: "About",
        title: "About page",
        component: About,
        path: "/",
        isPublic: true,
      },
      {
        name: "Skill",
        title: "Skill page",
        component: Skill,
        path: "/skill",
        isPublic: true,
      },
      {
        name: "Contact",
        title: "Contact page",
        component: Contact,
        path: "/contact",
        isPublic: true,
      },

      {
        name: "404",
        title: "404 page",
        component: NotFound,
        path: "*",
        isPublic: true,
      },
    ],
  },
];

export function MyRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          <Route path="/" element={<About />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/skill/:id" element={<SkillSample />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
