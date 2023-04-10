import { Html, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import { useState } from "react";
import Plane from "./pages/homeModel/Plane";
import "./styles.css";

export default function Model() {
  const { nodes, materials }: any = useGLTF(
    "https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@teleport/public/models/scene-transformed.glb"
  );
  const [isHover, setIsHover] = useState(false);
  const [message, setMessage] = useState("");
  const [hoverPosition, setHoverPosition] = useState<[number, number, number]>([
    0, 0, 0,
  ]);
  const handleHover = (
    hoverState: boolean,
    message: string = "",
    position?: [number, number, number]
  ) => {
    setIsHover(hoverState);
    setMessage(message);
    if (position) {
      setHoverPosition([
        position[0],
        position[1] + 3, // Add an offset to display the message above the mesh
        position[2],
      ]);
    }
  };

  const handlePointerEvents = (
    e: any,
    hoverState: boolean,
    message: string
  ) => {
    e.stopPropagation();
    const position = e.object.position.toArray();
    handleHover(hoverState, message, position);
  };
  return (
    <group dispose={null}>
      {isHover && (
        <Html position={hoverPosition}>
          <motion.div
            className="message-box"
            initial={{ translateY: -20 }}
            animate={{ translateY: 0 }}
            exit={{ translateY: 20 }}
          >
            <span>{message}</span>
          </motion.div>
        </Html>
      )}
      {/* <mesh
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        scale={[10, 1, 10]}
      /> */}
      {/* <Plane /> */}

      <mesh
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        position={[8, 1, 8]}
        onPointerEnter={(e) => handlePointerEvents(e, true, "Cube")}
        onPointerLeave={(e) => handlePointerEvents(e, false, "")}
      />
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
        position={[8, 1, -8]}
        onPointerEnter={(e) => handlePointerEvents(e, true, "Cylinder")}
        onPointerLeave={(e) => handlePointerEvents(e, false, "")}
      />

      <mesh
        geometry={nodes.Icosphere.geometry}
        material={nodes.Icosphere.material}
        position={[-8, 1, -8]}
        onPointerEnter={(e) => handlePointerEvents(e, true, "Icosphere")}
        onPointerLeave={(e) => handlePointerEvents(e, false, "")}
      />
      <mesh
        geometry={nodes.Cone.geometry}
        material={nodes.Cone.material}
        position={[-8, 1, 8]}
        onPointerEnter={(e) => handlePointerEvents(e, true, "Cone")}
        onPointerLeave={(e) => handlePointerEvents(e, false, "")}
      />
      <mesh
        geometry={nodes.Suzanne.geometry}
        material={nodes.Suzanne.material}
        position={[0, 1, 0]}
        onPointerEnter={(e) => handlePointerEvents(e, true, "Suzanne")}
        onPointerLeave={(e) => handlePointerEvents(e, false, "")}
      />
    </group>
  );
}

useGLTF.preload(
  "https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@teleport/public/models/scene-transformed.glb"
);
