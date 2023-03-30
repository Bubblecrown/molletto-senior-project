import { Scroll, ScrollControls } from "@react-three/drei";
import React from "react";
import { Canvas, useLoader, useThree } from "react-three-fiber";
import { Texture, TextureLoader } from "three";
import bg1 from "./assets/1.webp";
import bg2 from "./assets/2.avif";

interface BackgroundTileProps {
  texture: Texture;
  position: [number, number, number];
}

const BackgroundTile: React.FC<BackgroundTileProps> = ({
  texture,
  position,
}) => (
  <group position={position}>
    <sprite scale={[16, 9, 0]}>
      <spriteMaterial map={texture}></spriteMaterial>
    </sprite>
  </group>
);

interface BackgroundProps {
  images: string[];
}

const Background: React.FC<BackgroundProps> = ({ images }) => {
  const textures = useLoader(TextureLoader, images) as Texture[];
  const { width } = useThree((state) => state.viewport);
  const xW = 16
  const tiles = [];
  const tileCount = images.length;

  for (let i = 0; i < tileCount; i++) {
    tiles.push(
      <BackgroundTile
        key={`tile-${i}`}
        texture={textures[i]}
        position={[16 * i, 0, 0]}
      />
    );
  }

  return (
    <ScrollControls
      horizontal={true}
      damping={1}
      pages={2}
    >
      <Scroll>{tiles}</Scroll>
    </ScrollControls>
  );
};

const TestCanvasPosition: React.FC = () => {
  const images = [bg1, bg2]; // Add more images here as needed

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <Background images={images} />
      </Canvas>
    </div>
  );
};

export default TestCanvasPosition;
