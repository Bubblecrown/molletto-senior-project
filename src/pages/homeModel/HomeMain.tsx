import { Canvas } from "@react-three/fiber";
import { Stats, Environment } from "@react-three/drei";
import * as THREE from "three";

import Teleport from "./Teleport";
import Home from "./Home";
import Footer from "../../components/Footer/Footer";
import homeSound from "../../assets/sounds/homeSound.mp3";

const HomeMain = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas shadows>
        <Teleport />
        {/* <Environment
          files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@teleport/public/img/rustig_koppie_puresky_1k.hdr"
          background
        /> */} 
        <Home />
        <ambientLight intensity={0.2} color={"#222222"} />
        {/* <fog attach={"fog"} args={["#FD86A4", 0.1, 1]} /> */}
        <hemisphereLight
          intensity={0.2}
          color={"#00AAFE"}
          groundColor={"#FEAA00"}
          position={[0, 10, -27.434]}
        />
        <directionalLight
          intensity={0.2}
          position={[5, 19.606, 7.5]}
          color={"#294CFE"}
        />
        <directionalLight
          intensity={0.2}
          position={[-4.952, 5.525, 7.5]}
          color={"#FEFEFE"}
        />
        <directionalLight
          intensity={0.2}
          position={[5, 38.698, -101.326]}
          color={"#FEB029"}
        />

        {/* Yaku Area */}
        <pointLight
          intensity={0.2}
          position={[4.011, -1.75, 29.387]}
          color={"#E6CCFE"}
          decay={1.6}
        />
        <pointLight
          intensity={0.2}
          position={[6.268, -0.075, 15.256]}
          color={"#FEF1B8"}
          decay={2}
        />
        <pointLight
          intensity={0.2}
          position={[8.298, -0.922, 18.27]}
          color={"#FEF1B8"}
          decay={1.5}
        />
        <pointLight
          intensity={0.2}
          position={[10.391, 0.131, 15.928]}
          color={"#FEF1B8"}
        />
        {/* end Yaku Area */}

        {/* Nana Area */}
        <pointLight
          intensity={0.2}
          position={[-12.141, -2.101, 31.396]}
          color={"#C4BC20"}
          decay={1}
        />
        <pointLight
          intensity={0.2}
          position={[-13.831, 3.039, 8.329]}
          color={"#C4BC20"}
        />
        <pointLight
          intensity={0.2}
          position={[-12.141, -2.101, 31.396]}
          color={"#C285FE"}
          decay={1.5}
        />
        <pointLight
          intensity={0.2}
          position={[-7.795, -1.844, 26.583]}
          color={"#C285FE"}
          decay={1.5}
        />
        <pointLight
          intensity={0.2}
          position={[-13.647, -2.101, 24.62]}
          color={"#C285FE"}
          decay={1.5}
        />
        {/* end Nana Area */}

        {/* Penny Area */}
        <pointLight
          intensity={0.2}
          position={[7.703, 6.507, 0]}
          color={"#FEAE3D"}
          decay={1.5}
        />
        {/* end Penny Area */}

        {/* About us Area */}
        <pointLight
          intensity={0.2}
          position={[-20.513, 8.126, -12.498]}
          color={"#FEB561"}
          decay={1}
        />
        <pointLight
          intensity={0.2}
          position={[-20.302, 5.681, -18.858]}
          color={"#FEB561"}
          decay={1}
        />
        {/* end About us Area */}
       

        <Stats />
      </Canvas>
      <Footer audio={homeSound} />
    </div>
  );
};

export default HomeMain;
