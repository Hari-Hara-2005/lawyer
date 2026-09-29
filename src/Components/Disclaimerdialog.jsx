import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const STORAGE_KEY = "disclaimerAccepted";

const POINTS = [
  "The user is voluntarily using our website to gain information about us for their information and use. They also acknowledge that there has been no attempt by us to advertise or solicit work.",
  "Any information obtained or downloaded from our website does not lead to the creation of an attorney-client relationship between the Firm and the user.",
  "The content on this website is for informational purposes only and cannot be construed to be a form of legal opinion or legal advice.",
  "Agarwal Law Associates will not be held liable for any consequences from actions taken based on the materials or information provided on this website.",
];

// Reads the saved choice. Wrapped in try/catch in case storage is blocked.
function hasAccepted() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "yes";
  } catch {
    return false;
  }
}

export default function DisclaimerDialog() {
  const [open, setOpen] = useState(() => !hasAccepted());

  const handleProceed = () => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "yes");y
    } catch {
      /* ignore */
    }
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      maxWidth="md"
      fullWidth
      scroll="paper"
      disableEscapeKeyDown
      aria-labelledby="disclaimer-title"
    >
      <DialogTitle
        id="disclaimer-title"
        sx={{ textAlign: "center", fontWeight: 700, letterSpacing: 1 }}
      >
        DISCLAIMER
      </DialogTitle>

      <DialogContent dividers>
        <Typography gutterBottom>
          The Bar Council of India prohibits advocates from engaging in any form
          of advertisement or solicitation. By accessing the Agarwal Law
          Associates website (our website), the user acknowledges that:
        </Typography>

        <List sx={{ listStyleType: "disc", pl: 3 }}>
          {POINTS.map((text) => (
            <ListItem key={text} sx={{ display: "list-item", px: 0, py: 0.5 }}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </DialogContent>

      <DialogActions sx={{ justifyContent: "center", py: 2 }}>
        <Button
          variant="contained"
          onClick={handleProceed}
          autoFocus
          sx={{
            bgcolor: "#B9592F",
            borderRadius: 8,
            px: 4,
            textTransform: "none",
            "&:hover": { bgcolor: "#aa4e24" },
          }}
        >
          Proceed to Website
        </Button>
      </DialogActions>
    </Dialog>
  );
}
