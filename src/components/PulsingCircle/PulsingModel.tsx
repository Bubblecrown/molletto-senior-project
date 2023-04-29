import { useRef } from "react";
import { PulsingBox } from "./PulsingStyle";
import soundEffect from "../../assets/sounds/effects/knock_door.mp3";

const PulsingModel = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const volume = 0.3;
  const playClickSound = () => {
    if (audioRef?.current?.paused) {
      audioRef.current.play();
      audioRef.current.volume = volume;

    }
  };
  return (
    <div onClick={() => playClickSound()} style={{ cursor: "pointer" }}>
      <audio ref={audioRef}>
        <source src={soundEffect} type="audio/mpeg" />
      </audio>
      <PulsingBox />
    </div>
  );
};

export default PulsingModel;
