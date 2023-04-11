import { useEffect, useRef } from "react";
import { CircleContainer, PulsingContainer } from "./PulsingStyle";
import sound from "../../assets/sounds/aboutus.mp3";

const PulsingCanvas = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const volume = 0.3;
  const playClickSound = () => {
    if (audioRef?.current?.paused) {
      audioRef.current.play();
      audioRef.current.volume = volume;
    } else {
      audioRef?.current?.pause();
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={sound} type="audio/mpeg" />
      </audio>
      <PulsingContainer onClick={playClickSound}>
        
        <CircleContainer></CircleContainer>
      </PulsingContainer>
    </>
  );
};

export default PulsingCanvas;
