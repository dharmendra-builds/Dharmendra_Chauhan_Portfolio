import { useState, useEffect } from "react";

export default function useTyped(
  words,
  { typeSpeed = 160, deleteSpeed = 100, pause = 1000 } = {}
) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    const atFullWord = !deleting && charIdx === word.length;
    const speed = atFullWord ? pause : deleting ? deleteSpeed : typeSpeed;

    const timer = setTimeout(() => {
      if (!deleting) {
        if (charIdx === word.length) {
          // Full word has been shown for `pause` ms — begin deleting.
          setDeleting(true);
        } else {
          setText(word.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        }
      } else {
        if (charIdx === 0) {
          // Fully deleted — advance to the next word.
          setDeleting(false);
          setWordIdx((i) => (i + 1) % words.length);
        } else {
          setText(word.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIdx, deleting, wordIdx, words, typeSpeed, deleteSpeed, pause]);

  return text;
}