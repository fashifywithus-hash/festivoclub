import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Music, Pause } from "lucide-react";

const MusicButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("/festivoclub/song.mp3");
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        // Ignore if placeholder file is missing or fails to load
      });
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", onEnded);
    return () => audio.removeEventListener("ended", onEnded);
  }, []);

  return (
    <motion.button
      type="button"
      onClick={togglePlay}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.8, duration: 0.5 }}
      className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-foreground/90 hover:bg-foreground rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 text-gold"
      aria-label={isPlaying ? "Pause music" : "Play music"}
    >
      {isPlaying ? (
        <Pause className="w-7 h-7" />
      ) : (
        <Music className="w-7 h-7" />
      )}
    </motion.button>
  );
};

export default MusicButton;
