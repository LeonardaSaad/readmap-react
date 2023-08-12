import { useLocation } from "react-router-dom";

export default function usePath() {
  let isHome = false;

  const { pathname } = useLocation();

  if (pathname === "/" || pathname === "/#") isHome = true;

  return {
    isHome,
  }
}
