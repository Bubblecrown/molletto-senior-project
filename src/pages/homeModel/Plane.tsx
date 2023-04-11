import { Html, useGLTF } from "@react-three/drei";
import { GLTFResult } from "../../types/HomeMesh";
import { useDispatch } from "react-redux";
import { setCircleClicked, setPosition } from "../../slices/HomeModel";
interface PlaneProps {
  onPointerMove?: (event: any) => void;
  onDoubleClick?: (event: any) => void;
}
const Plane = ({ onPointerMove, onDoubleClick }: PlaneProps) => {
  const { nodes, materials, animations } = useGLTF("/home.gltf") as GLTFResult;
  const dispatch = useDispatch();
  const setView = (position_plane: Number) =>
    dispatch(setPosition({ position_plane }));
  const setCircle = (position_circle: Number) =>
    dispatch(setCircleClicked({ position_circle }));
  return (
    <group
      name="path_click"
      position={[0.05, -4.74, 0.26]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={0.39}
    >
      <group
        name="banana_path_1"
        onPointerMove={onPointerMove}
        onDoubleClick={onDoubleClick}
        onPointerEnter={() => {
          setView(-2), setCircle(-4);
        }}
      >
        <mesh
          name="banana_path_1001"
          geometry={nodes.banana_path_1001.geometry}
          material={materials["nana_area1.002"]}
          position={[-20.42, 51.13, -0.67]}
        />
        <mesh
          name="banana_path_2001"
          geometry={nodes.banana_path_2001.geometry}
          material={materials["nana_area1.002"]}
          position={[-18.79, 55.33, -0.67]}
        />
        <mesh
          name="banana_path_3"
          geometry={nodes.banana_path_3.geometry}
          material={materials["nana_area1.002"]}
          position={[-15.62, 58.58, -0.6]}
        />
        <mesh
          name="banana_path_4"
          geometry={nodes.banana_path_4.geometry}
          material={materials["nana_area1.002"]}
          position={[-10.95, 60.06, -0.53]}
        />
      </group>
      <group
        name="banana_path_2"
        onPointerMove={onPointerMove}
        onDoubleClick={onDoubleClick}
        onPointerEnter={() => {
          setView(2), setCircle(-0.5);
        }}
      >
        <mesh
          name="banana_path_10"
          geometry={nodes.banana_path_10.geometry}
          material={materials["nana_area1.002"]}
          position={[0.29, -32.77, -10.68]}
        />
        <mesh
          name="banana_path_6"
          geometry={nodes.banana_path_6.geometry}
          material={materials["nana_area1.002"]}
          position={[17.08, -41.53, -10.4]}
        />
        <mesh
          name="banana_path_7"
          geometry={nodes.banana_path_7.geometry}
          material={materials["nana_area1.002"]}
          position={[12.16, -39.57, -10.46]}
        />
        <mesh
          name="banana_path_8"
          geometry={nodes.banana_path_8.geometry}
          material={materials["nana_area1.002"]}
          position={[6.89, -39.61, -10.56]}
        />
        <mesh
          name="banana_path_9"
          geometry={nodes.banana_path_9.geometry}
          material={materials["nana_area1.002"]}
          position={[2.35, -37.45, -10.53]}
        />
      </group>
      <mesh
        name="path_1"
        geometry={nodes.path_1.geometry}
        material={materials["ground1.002"]}
        position={[0.08, 52.75, 0.23]}
        onPointerMove={onPointerMove}
        onDoubleClick={onDoubleClick}
        onPointerEnter={() => {
          setView(-2), setCircle(-4.74);
        }}
      />
      <mesh
        name="path_2"
        geometry={nodes.path_2.geometry}
        material={materials["ground1.002"]}
        position={[-3.58, -0.52, -7.65]}
        onPointerMove={onPointerMove}
        onDoubleClick={onDoubleClick}
        onPointerEnter={() => {
          setView(2), setCircle(-1.5);
        }}
      />
      <mesh
        name="path_3"
        geometry={nodes.path_3.geometry}
        material={materials["ground1.002"]}
        position={[-5.44, -68.9, -9.91]}
        onPointerMove={onPointerMove}
        onDoubleClick={onDoubleClick}
        onPointerEnter={() => {
          setView(2), setCircle(-0.5);
        }}
      />
      <mesh
        name="stair_1"
        geometry={nodes.stair_1.geometry}
        material={materials["other1.002"]}
        position={[2.27, 21.07, -3.81]}
        onPointerMove={onPointerMove}
        onDoubleClick={onDoubleClick}
        onPointerEnter={() => {
          setView(1), setCircle(2);
        }}
      />
      <mesh
        name="stair_2"
        geometry={nodes.stair_2.geometry}
        material={materials["other1.002"]}
        position={[-9.96, -15.08, -9.33]}
        onPointerMove={onPointerMove}
        onDoubleClick={onDoubleClick}
        onPointerEnter={() => {
          setView(1), setCircle(2);
        }}
      />
    </group>
  );
};

useGLTF.preload("/home.gltf");
export default Plane;
