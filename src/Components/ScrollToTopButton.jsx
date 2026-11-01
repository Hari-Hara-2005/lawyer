import { useEffect, useState } from "react";
import { Fab } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { ACCENT, ACCENT_HOVER } from "../Theme";
function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!showButton) return null;

  return (
    <Fab
      onClick={scrollToTop}
      size="medium"
      aria-label="Scroll to top"
      sx={{
        position: "fixed",
        bottom: 25,
        right: 25,
        zIndex: 9999,
        backgroundColor: ACCENT,
        color: "#fff",
        "&:hover": {
          backgroundColor: ACCENT,
          transform: "translateY(-3px)",
        },
        transition: "all .2s ease",
      }}
    >
      <KeyboardArrowUpIcon />
    </Fab>
  );
}

export default ScrollToTopButton;
