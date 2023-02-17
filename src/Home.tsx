import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

import AboutTransition from "./AboutTransition";
import { Container, Container1, Container2 } from "./GlobalStyle";

const Home = () => {
  // gsap.registerPlugin(ScrollTrigger);

  // const container = useRef(null);
  // const line = useRef(null);

  // useEffect(() => {
  //   // tl.from("#container", { yPercent: -100 }).to("#container", {
  //   //   duration: 8,
  //   //   yPercent: 100,
  //   // });
  //   gsap.from("#line", {
  //     x: 200,
  //     duration: 8,
  //     scrollTrigger: {
  //       trigger: "#container",
  //       markers: true,
  //       scrub: true,
  //       pin: true,
  //       pinSpacing: false,
  //       start: "top center",
  //       endTrigger: "html",
  //       end: "bottom bottom",
  //       anticipatePin: 1,
  //       toggleActions: "restart none none none",
  //     },
  //   });
  //   // const tl = gsap.timeline({
  //   //   scrollTrigger: {
  //   //     trigger: "#line",
  //   //     markers: true,
  //   //     scrub: true,
  //   //     pin: true,
  //   //     pinSpacing: false,
  //   //     start: "top center",
  //   //     end: "top top",
  //   //     anticipatePin: 1,
  //   //     toggleActions: "restart none none none",
  //   //   },
  //   // });
  //   // tl.from("#line", { xPercent: -50 }).to("#line", {
  //   //   duration: 8,
  //   //   xPercent: 50,
  //   // });
  // }, []);

  return (
    <>
      {/* <Container> */}
        <Container1
          id="container"
          initial={{ height: 0 }}
          animate={{ height: "100vh" }}
          transition={{ duration: 1 }}
          // exit={{ transformOrigin: "bottom", height: 0, bottom: 0, position:'fixed' }}
          exit={{opacity: 1}}
        >
          Homeeeeee Homeeeeee Homeeeeee Homeeeeee Homeeeeee Homeeeeee Homeeeeee
          Homeeeeee Homeeeeee Homeeeeee Homeeeeee Homeeeeee Homeeeeee Homeeeeee
          Homeeeeee Homeeeeee Homeeeeee Homeeeeee Homeeeeee Homeeeeee Homeeeeee
          Homeeeeee Homeeeeee Homeeeeee Homeeeeee Homeeeeee Homeeeeee Homeeeeee
          Homeeeeee Homeeeeee Homeeeeee Homeeeeee Homeeeeee Homeeeeee Homeeeeee
          Homeeeeee Homeeeeee Homeeeeee Homeeeeee Homeeeeee Homeeeeee Homeeeeee
          Homeeeeee Homeeeeee
          <Container2 id="line">
          Aboutttttt
        </Container2>
        </Container1>
        
      {/* </Container> */}
    </>
  );
};

export default Home;
