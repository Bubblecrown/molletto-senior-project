import React from "react";

const LightModel = () => {
  return (
    <>
      {/* #FD86A4 */}
      <ambientLight intensity={0.4} color={"#222222"} />
      <fog attach={"fog"} args={["rgba(241, 211, 202, 0.217)", 0.2, 120]} />
      <hemisphereLight
        intensity={0.2}
        color={"#00AAFE"}
        groundColor={"#FEAA00"}
        position={[0, 10, -27.434]}
      />
      {/* <directionalLight
        intensity={0.2}
        position={[5, 19.606, 7.5]}
        color={"#294CFE"}
        castShadow
      />
      <directionalLight
        intensity={0.2}
        position={[-4.952, 5.525, 7.5]}
        color={"#FEFEFE"}
        castShadow
      /> */}
      {/* <directionalLight
        intensity={0.5}
        position={[5, 38.698, -101.326]}
        color={"#FEB029"}
        castShadow
      /> */}

      {/* Yaku Area */}
      <pointLight
        intensity={0.2}
        position={[4.011, -1.75, 29.387]}
        color={"#E6CCFE"}
        decay={1.6}
        castShadow
      />
      <pointLight
        intensity={0.3}
        position={[6.268, -0.075, 15.256]}
        color={"#FEF1B8"}
        decay={1}
        castShadow
      />
      {/* <pointLight
        intensity={0.2}
        position={[8.298, -0.922, 18.27]}
        color={"#FEF1B8"}
        decay={1.5}
        castShadow
      /> */}
      {/* <pointLight
        intensity={1}
        position={[10.391, 0.131, 15.928]}
        color={"#FEF1B8"}
        castShadow
      /> */}
      {/* end Yaku Area */}

      {/* Nana Area */}
      <pointLight
        intensity={0.2}
        position={[-12.141, -2.101, 31.396]}
        color={"#C4BC20"}
        decay={1}
        castShadow
      />
      {/* <pointLight
        intensity={1}
        position={[-13.831, 3.039, 8.329]}
        color={"#C4BC20"}
        castShadow
      /> */}
      {/* <pointLight
        intensity={0.2}
        position={[-12.141, -2.101, 31.396]}
        color={"#C285FE"}
        decay={1.5}
        castShadow
      /> */}
      {/* <pointLight
        intensity={0.5}
        position={[-7.795, -1.844, 26.583]}
        color={"#C285FE"}
        decay={1.5}
        castShadow
      /> */}
      <pointLight
        intensity={0.5}
        position={[-13.647, -2.101, 24.62]}
        color={"#C285FE"}
        decay={1.5}
        castShadow
      />
      {/* end Nana Area */}

      {/* Penny Area */}
      {/* <pointLight
        intensity={0.2}
        position={[7.703, 6.507, 0]}
        color={"#FEAE3D"}
        decay={1.5}
        castShadow
      /> */}
      {/* end Penny Area */}

      {/* About us Area */}
      {/* <pointLight
        intensity={0.2}
        position={[-20.513, 8.126, -12.498]}
        color={"#FEB561"}
        decay={1}
        castShadow
      />  */}
      <pointLight
        intensity={0.5}
        position={[-20.302, 5.681, -18.858]}
        color={"#FEB561"}
        decay={1}
        castShadow
      />
      {/* end About us Area */}
    </>
  );
};

export default LightModel;
