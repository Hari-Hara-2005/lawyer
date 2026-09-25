import { useEffect, useState } from "react";
import { Box } from "@mui/material";

/**
 * Typewriter effect: types a word, pauses, deletes it, then moves to the next.
 * Usage: <TypingText words={["Legal Company", "Criminal Lawyer"]} />
 */
export default function TypingText({
  words,
  typeSpeed = 90,
  deleteSpeed = 50,
  pause = 1600,
  color,
}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    let delay = deleting ? deleteSpeed : typeSpeed;

    if (!deleting && text === word) delay = pause; // finished typing, hold
    if (deleting && text === "") delay = 400; // finished deleting, short gap

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(word.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause]);

  return (
    <Box component="span" sx={{ color }}>
      {text}
      <Box
        component="span"
        aria-hidden
        sx={{
          display: "inline-block",
          width: "2px",
          height: "1em",
          ml: "3px",
          bgcolor: "currentColor",
          verticalAlign: "text-bottom",
          animation: "blink 1s steps(1) infinite",
          "@keyframes blink": { "50%": { opacity: 0 } },
          "@media (prefers-reduced-motion: reduce)": { animation: "none" },
        }}
      />
    </Box>
  );
}
