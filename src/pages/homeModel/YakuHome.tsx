import { Html, useAnimations, useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import { GLTFResult } from "../../types/HomeMesh";
import soundEffect from "../../assets/sounds/effects/knock_door.mp3";
import { useNavigate } from "react-router";
import PulsingModel from "../../components/PulsingCircle/PulsingModel";
import { useSoundEffect } from "../../hooks/useSoundEffect";

const YakuHome = () => {
  const { nodes, materials, animations } = useGLTF(
    "/home.gltf"
  ) as unknown as GLTFResult;
  const navigate = useNavigate();
  const { audioRef, playSoundEffect } = useSoundEffect(soundEffect);

  const handleClick = () => {
    playSoundEffect();
    setTimeout(() => {
      navigate("/yakuTale");
    }, 1000);
  };
  return (
    <>
      <group
        position={[0.05, -4.74, 0.26]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.39}
      >
        <group name="yaku_home_door" onClick={handleClick}>
          <mesh
            name="yakupCube6"
            geometry={nodes.yakupCube6.geometry}
            material={materials["Yaku_area.002"]}
            position={[10.02, 72.8, -5.55]}
          ></mesh>
          <mesh
            name="yakupolySurface2pCylinder1"
            geometry={nodes.yakupolySurface2pCylinder1.geometry}
            material={materials["Yaku_area.002"]}
            position={[10.95, 74.16, -5.86]}
          >
            <group position={[-0.5, 0, 0]}>
              <Html>
                <div
                  onClick={() =>
                    setTimeout(() => {
                      navigate("/yakuTale");
                    }, 1000)
                  }
                >
                  <PulsingModel />
                </div>
                <audio ref={audioRef}>
                  <source src={soundEffect} type="audio/mpeg" />
                </audio>
              </Html>
            </group>
          </mesh>
        </group>
      </group>
    </>
  );
};

export default React.memo(YakuHome);
