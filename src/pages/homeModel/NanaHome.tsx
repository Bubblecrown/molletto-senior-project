import { Html, useAnimations, useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import { GLTFResult } from "../../types/HomeMesh";
import PulsingCanvas from "../../components/PulsingCircle/PulsingCanvas";
import soundEffect from "../../assets/sounds/effects/knock_door.mp3";
import { useNavigate } from "react-router";

const NanaHome = () => {
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
        <group position={[-21.7, 47.26, -3.23]}>
          <Html>
            <PulsingCanvas />
            <audio ref={audioRef}>
              <source src={soundEffect} type="audio/mpeg" />
            </audio>
          </Html>
        </group>
        <group name="home_nana_door" onClick={playClickSound}>
          <mesh
            name="thongpCube3"
            geometry={nodes.thongpCube3.geometry}
            material={materials["nana_area1.002"]}
            position={[-21.7, 47.26, -3.23]}
          />
        </group>
      </group>
    </>
  );
};

export default NanaHome;
