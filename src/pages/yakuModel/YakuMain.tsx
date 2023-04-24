// YakuMain.tsx
import { Canvas } from "@react-three/fiber";
import { Environment, Loader, OrbitControls } from "@react-three/drei";
import { CanvasContainer } from "../homeModel/HomeStyle";

import { YakuReal } from "./Yaku_real";

const YakuMain = () => {
  return (
    <CanvasContainer>
      <Canvas style={{ background: "#e8e8e8" }}>
        {/* <Environment
          files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/4k/studio_small_08_4k.hdr"
          background
        /> */}

        <ambientLight intensity={0.6} />
        <OrbitControls
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI - Math.PI / 3}
        />
        <YakuReal scale={30} position={[0, -0.5, 0]} />
      </Canvas>
      <Loader />
      {/* <Footer audio={homeSound} /> */}
    </CanvasContainer>
  );
};

export default YakuMain;
