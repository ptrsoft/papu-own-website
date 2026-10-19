import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Renders nothing. When the Home route is entered with
// location.state = { scrollTo: "<id>" } (set by the Header nav when the user
// is coming from another route), or with a matching location.hash, it scrolls
// the target section into view once the page has mounted.
const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    const target =
      location.state?.scrollTo ||
      (location.hash ? location.hash.replace("#", "") : null);
    if (!target) return;

    // Wait a tick so the section is in the DOM, then smooth-scroll to it.
    const t = setTimeout(() => {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);

    return () => clearTimeout(t);
  }, [location]);

  return null;
};

export default ScrollToSection;
