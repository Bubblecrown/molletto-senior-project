import { Html, useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import { GLTFResult } from "../../types/HomeMesh";
import soundEffect from "../../assets/sounds/effects/knock_door.mp3";
import { useNavigate } from "react-router";
import PulsingModel from "../../components/PulsingCircle/PulsingModel";
import { useSoundEffect } from "../../hooks/useSoundEffect";

const PennyHome = () => {
  const navigate = useNavigate();
  const { nodes, materials, animations } = useGLTF(
    "/home.gltf"
  ) as unknown as GLTFResult;

  const { audioRef, playSoundEffect } = useSoundEffect(soundEffect);

  const handleClick = () => {
    playSoundEffect();
    setTimeout(() => {
      navigate("/pennyTale");
    }, 1000);
  };

  return (
    <>
      <group
        position={[0.05, -4.74, 0.26]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.39}
      >
        <group name="pennie_home_door" onClick={handleClick}>
          <mesh
            name="peniepCube43"
            geometry={nodes.peniepCube43.geometry}
            material={materials["Penny_area.002"]}
            position={[14.19, 10.15, -11.94]}
          >
            <group>
              <Html>
                <div
                  onClick={() =>
                    setTimeout(() => {
                      navigate("/pennyTale");
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

export default React.memo(PennyHome);
