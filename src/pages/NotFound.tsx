import { useLocation } from "react-router-dom";
import { useEffect } from "react";

/**
 * Default 404 page, displayed when a user attempts to access a non-existent route.
 */
const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 not found: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__message">Page not found</p>
      <button
        onClick={() => (window.location.href = "/")}
        className="button not-found__button"
      >
        Return home
      </button>
    </div>
  );
};

export default NotFound;
