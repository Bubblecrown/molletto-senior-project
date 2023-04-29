import { useRef } from "react";

export const useSoundEffect = (soundUrl: string, volume: number = 0.3) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const playSoundEffect = () => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return { audioRef, playSoundEffect };
};