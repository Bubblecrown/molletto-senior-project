import { useFrame } from "@react-three/fiber";
import { Image, PerspectiveCamera, TrackballControls } from "@react-three/drei";
import { useRef, useState, useMemo } from "react";
import { Vector2, Vector3 } from "three";
import { useEffect } from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import Plane from "./Plane";
import rabbit from "../../assets/rabbit.png";
const Teleport = () => {
  const ref = useRef<any>(null);
  const positionY = useSelector(
    (state: RootState) => state.positionModel.positionY
  );

  const positionY_circle = useSelector(
    (state: RootState) => state.positionModel.positionY_circle
  );
  const circleRef = useRef<any>(null);
  const circleEffectRef = useRef<any>(null);
  const to = useMemo(() => new Vector3(0, -1, 35), []);
  const [dragging, setDragging] = useState(false);
  const dragVector = useMemo(() => new Vector2(), []);

  useEffect(() => {
    const onPointerDown = () => {
      setDragging(true);
    };
    const onPointerUp = () => {
      setDragging(false);
    };
    const onPointerMove = (e: any) => {
      dragVector.set(e.movementX, e.movementY);
      dragging &&
        (ref.current.rotation.y += ((dragVector.x / 10) * Math.PI) / 180) &&
        (ref.current.children[0].rotation.x +=
          ((dragVector.y / 10) * Math.PI) / 180);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("pointerup", onPointerUp);
    document.addEventListener("pointermove", onPointerMove);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("pointerup", onPointerUp);
      document.removeEventListener("pointermove", onPointerMove);
    };
  });
  useFrame((_, delta) => {
    ref.current.position.lerp(to, delta * 2);

    circleEffectRef.current.scale.x = circleEffectRef.current.scale.y +=
      delta * 2;
    circleEffectRef.current.material.opacity -= delta * 1;
  });

  return (
    <>
      <group ref={ref} position={[0, 100, -120]}>
        <PerspectiveCamera makeDefault />
      </group>
      <Plane
        onPointerMove={({ point }) => {
          circleRef.current.position.z = point.z;
          circleRef.current.position.x = point.x;
        }}
        onDoubleClick={({ point }) => {
          to.set(point.x, positionY, point.z);
          circleEffectRef.current.position.copy(circleRef.current.position);
          circleEffectRef.current.scale.set(1, 1, 1);
          circleEffectRef.current.material.opacity = 1;
        }}
      />
      {/* </mesh> */}
      {/* Main Ring */}
      {/* <group
        ref={circleRef}
        rotation-x={-Math.PI / 2}
        position-y={positionY_circle}
      >
        <Image url={rabbit} />
      </group> */}
      
      <mesh
        ref={circleRef}
        rotation-x={-Math.PI / 2}
        position-y={positionY_circle}
      >
        {/* args={[inner, outer, segment]} */}
        <ringGeometry args={[0.1, 0.2, 32]} />
        <meshBasicMaterial color={"red"} transparent opacity={0.25} />
      </mesh>
      {/* Ring Effect */}
      <mesh ref={circleEffectRef} rotation-x={-Math.PI / 2} position-y={0.03}>
        <ringGeometry args={[0.39, 1, 32]} />
        <meshBasicMaterial color={"pink"} transparent />
      </mesh>
    </>
  );
};

export default Teleport;
