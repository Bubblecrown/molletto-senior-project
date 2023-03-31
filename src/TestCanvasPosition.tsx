import { Html, Scroll, ScrollControls, useAspect } from "@react-three/drei";
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
}) => {
  const [width, height] = useAspect(window.innerWidth, window.innerHeight);
  if(width < 1024){
    const xw = 16
    return (
      <group position={position}>
        <sprite scale={[xw, height, 0]}>
          <spriteMaterial map={texture}></spriteMaterial>
        </sprite>
      </group>
    );
  } else{
    const xw = width
    return (
      <group position={position}>
        <sprite scale={[xw, height, 0]}>
          <spriteMaterial map={texture}></spriteMaterial>
        </sprite>
      </group>
    );
  }
  // const viewport = useThree((state) => state.viewport);

  
};

interface BackgroundProps {
  images: string[];
}
const Background: React.FC<BackgroundProps> = ({ images }) => {
  const textures = useLoader(TextureLoader, images) as Texture[];
  const [width, height] = useAspect(window.innerWidth, window.innerHeight);
  const viewport = useThree((state) => state.viewport);

  function pushBackground(xw: number, count: number): JSX.Element[] {
    if (count === 0) {
      return [];
    }

    const tiles = [];
    const tileCount = images.length;

    for (let i = 0; i < tileCount; i++) {
      tiles.push(
        <BackgroundTile
          key={`tile-${count}-${i}`}
          texture={textures[i]}
          position={[xw * (count - 1) + xw * i, 0, 0]}
        />
      );
    }

    return [...tiles, ...pushBackground(xw, count - 1)];
  }

  const tiles = pushBackground(width < 1024 ? 1024 : width, 2);

  return (
    <ScrollControls horizontal pages={2}>
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
