import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import { GLTFResult } from "../../types/HomeMesh";
import { useNavigate } from "react-router";

const NanaHome = () => {

  const { nodes, materials, animations } = useGLTF(
    "/home.gltf"
  ) as unknown as GLTFResult;

  return (
    <>
      <group
        position={[0.05, -4.74, 0.26]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.39}
      >
        <group
          name="home_nana_door">
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

export default React.memo(NanaHome);
