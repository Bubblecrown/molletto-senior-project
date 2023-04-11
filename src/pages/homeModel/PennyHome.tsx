import { Html, useAnimations, useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import { GLTFResult } from "../../types/HomeMesh";
import PulsingCanvas from "../../components/PulsingCircle/PulsingCanvas";
import soundEffect from "../../assets/sounds/effects/knock_door.mp3";
import { useNavigate } from "react-router";

const PennyHome = () => {
  const navigate = useNavigate();
  const { nodes, materials, animations } = useGLTF("/home.gltf") as GLTFResult;
  const audioRef = useRef<HTMLAudioElement>(null);
  const volume = 0.3;
  const playClickSound = () => {
    if (audioRef?.current?.paused) {
      audioRef.current.play();
      audioRef.current.volume = volume;
      setTimeout(() => {
        navigate("/about");
      }, 1000);
    }
  };
  return (
    <>
      <group
        position={[0.05, -4.74, 0.26]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.39}
      >
        <group position={[14.19, 10.15, -11.94]}>
          <Html>
            <PulsingCanvas />
            <audio ref={audioRef}>
              <source src={soundEffect} type="audio/mpeg" />
            </audio>
          </Html>
        </group>
        <group name="pennie_home_door" onClick={playClickSound}>
          <mesh
            name="peniepCube43"
            geometry={nodes.peniepCube43.geometry}
            material={materials["Penny_area.002"]}
            position={[14.19, 10.15, -11.94]}
          />
        </group>
      </group>
    </>
  );
};

export default PennyHome;
