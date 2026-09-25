import { createTheme } from "@mui/material";

export const ACCENT = "#B9592F";
export const ACCENT_HOVER = "#9f4a25";
export const LINE = "1px solid rgba(255,255,255,0.15)";

export const theme = createTheme({
  palette: { primary: { main: ACCENT } },
  typography: { fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif" },
  shape: { borderRadius: 0 },
});
