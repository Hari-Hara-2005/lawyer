import { Box, Typography } from "@mui/material";
import { ACCENT } from "../Theme";

export default function SectionTitle({
  eyebrow,
  title,
  align = "left",
  textColor = "#241c19",
  maxWidth = 680,
  component = "h2",
  sx,
}) {
  const centered = align === "center";

  return (
    <Box
      sx={{
        textAlign: align,
        mb: 3,
        ...(centered && {
          mx: "auto",
          maxWidth,
        }),
        ...sx,
      }}
    >
      {eyebrow && (
        <Typography
          sx={{
            color: ACCENT,
            fontSize: 14,
            fontWeight: 400,
            letterSpacing: 3,
            textTransform: "uppercase",
            mb: 2,
          }}
        >
          {eyebrow}
        </Typography>
      )}

      <Typography
        component={component}
        sx={{
          color: textColor,
          fontWeight: 700,
          lineHeight: 1.3,
          fontSize: {
            xs: 32,
            sm: 40,
            md: 46,
          },
          maxWidth,
          ...(centered && {
            mx: "auto",
          }),
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}
