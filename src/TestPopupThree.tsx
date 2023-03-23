import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";

function Popup({ position }: any) {
  return (
    <Html
      position={position}
      style={{
        background: "white",
        padding: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
        fontSize: "24px",
        textAlign: "center",
      }}
    >
      <div>Hello, world!</div>
    </Html>
  );
}

function InteractiveObject({ position }: any) {
  const ref = useRef<any>(null);
  const [hovered, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01;
    }
  });

  function handleMouseDown(event: any) {
    setClicked(true);
    setPopupPosition({ x: event.clientX, y: event.clientY });
  }

  return (
    <>
      <mesh
        ref={ref}
        position={position}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        onPointerDown={handleMouseDown}
      >
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
      {clicked && <Popup position={popupPosition} />}
    </>
  );
}

const TestPopupThree = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <InteractiveObject position={[-2, 0, 0]} />
      <InteractiveObject position={[2, 0, 0]} />
    </Canvas>
  );
};

export default TestPopupThree;
