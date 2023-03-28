import { Html, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import { useState } from "react";
import "./styles.css";
interface PlaneProps {
  onPointerMove?: (event: any) => void;
  onDoubleClick?: (event: any) => void;
}
const Plane = ({ onPointerMove, onDoubleClick }: PlaneProps) => {
  const { nodes, materials }: any = useGLTF(
    "https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@teleport/public/models/scene-transformed.glb"
  );

  return (
    <group>
      <mesh
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        scale={[10, 1, 10]}
        position={[-30, 0, 0]}
        onPointerMove={onPointerMove}
        onDoubleClick={onDoubleClick}
      />
      <mesh
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        scale={[10, 1, 10]}
        position={[0, 0, 0]}
        onPointerMove={onPointerMove}
        onDoubleClick={onDoubleClick}
      />
      <mesh
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        scale={[10, 1, 10]}
        position={[40, 0, 0]}
        onPointerMove={onPointerMove}
        onDoubleClick={onDoubleClick}
      />
    </group>
  );
};

useGLTF.preload(
  "https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@teleport/public/models/scene-transformed.glb"
);
export default Plane;
