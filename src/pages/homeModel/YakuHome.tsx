import { Html, useAnimations, useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import { GLTFResult } from "../../types/HomeMesh";
import PulsingCanvas from "../../components/PulsingCircle/PulsingCanvas";
import soundEffect from "../../assets/sounds/effects/knock_door.mp3";
import { useNavigate } from "react-router";

const YakuHome = () => {
  const navigate = useNavigate();
  const { nodes, materials, animations } = useGLTF("/home.gltf") as unknown as GLTFResult;
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
        <group name="yaku_home_door" onClick={playClickSound}>
          <group position={[10.02, 72.8, -5.55]}>
            <Html>
              <PulsingCanvas />
              <audio ref={audioRef}>
                <source src={soundEffect} type="audio/mpeg" />
              </audio>
            </Html>
          </group>

          <mesh
            name="yakupCube6"
            geometry={nodes.yakupCube6.geometry}
            material={materials["Yaku_area.002"]}
            position={[10.02, 72.8, -5.55]}
          />
          <mesh
            name="yakupolySurface2pCylinder1"
            geometry={nodes.yakupolySurface2pCylinder1.geometry}
            material={materials["Yaku_area.002"]}
            position={[10.95, 74.16, -5.86]}
          />
        </group>
      </group>
    </>
  );
};

export default YakuHome;
