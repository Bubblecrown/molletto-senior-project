import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "../locomotive-scroll.css";
import { TaleSection } from "../../GlobalStyle";
import { BackImage, BgVideo, FrontImage, MidImage } from "./YakuStyle";
import { YakuSceneData } from "../../data/yakuStory";

const YakuStory = () => {
  const containerRef = useRef(null);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        direction: "horizontal",
        tablet: {
          smooth: true,
          direction: "horizontal",
        },
        smartphone: {
          smooth: true,
          direction: "horizontal",
        },
      }}
      watch={[]}
    >
      <TaleSection ref={containerRef} data-scroll-container>
        {/* <span
          className="data-scroll-long"
          data-scroll-section
          style={{ position: "relative" }}
        >
          <img
            data-scroll
            data-scroll-sticky
            data-scroll-target="#pin5"
            id="pin5"
            src={long}
            alt=""
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
            }}
          />
          <h1
            data-scroll
            data-scroll-direction="vertical"
            data-scroll-speed="10"
            style={{ zIndex: 100 }}
          >
            That's why I code every day
          </h1>
        </span> */}

        {/* scene 2 */}
        <span data-scroll-section>
          <BackImage
            data-scroll
            src={YakuSceneData.scene_2.b}
            alt={YakuSceneData.scene_2.bAlt}
          />
          <video data-scroll muted loop autoPlay>
            <source src={YakuSceneData.scene_2.bg} type="video/mp4" />
          </video>
        </span>
        {/* end scene 2 */}

        {/* scene 3.1 */}
        <span data-scroll-section>
          <video data-scroll muted loop autoPlay>
            <source src={YakuSceneData.scene_3.bg} type="video/mp4" />
          </video>
        </span>
        {/* end scene 3.1 */}

        {/* scene 3_2 */}
        <span data-scroll-section>
          <FrontImage
            data-scroll
            data-scroll-speed="3"
            src={YakuSceneData.scene_3_2.f}
            alt={YakuSceneData.scene_3_2.fAlt}
            l="600px"
            t="-100px"
          />
          <BackImage
            data-scroll
            src={YakuSceneData.scene_3_2.b}
            alt={YakuSceneData.scene_3_2.bAlt}
          />
          <MidImage
            data-scroll
            src={YakuSceneData.scene_3_2.m}
            alt={YakuSceneData.scene_3_2.mAlt}
          />
          <video data-scroll muted loop autoPlay>
            <source src={YakuSceneData.scene_3_2.bg} type="video/mp4" />
          </video>
        </span>
        {/* end scene 3_2 */}

        {/* scene 4 */}
        <span data-scroll-section>
          <FrontImage
            data-scroll
            src={YakuSceneData.scene_4.f}
            alt={YakuSceneData.scene_4.fAlt}
          />
          <BackImage
            data-scroll
            src={YakuSceneData.scene_4.b}
            alt={YakuSceneData.scene_4.bAlt}
          />
          <video data-scroll muted loop autoPlay>
            <source src={YakuSceneData.scene_4.bg} type="video/mp4" />
          </video>
        </span>
        {/* end scene 4 */}

        {/* scene 5 */}
        <span data-scroll-section>
          <FrontImage
            data-scroll
            src={YakuSceneData.scene_5.f}
            alt={YakuSceneData.scene_5.fAlt}
          />
          <BackImage
            data-scroll
            src={YakuSceneData.scene_5.b}
            alt={YakuSceneData.scene_5.bAlt}
          />
          <video data-scroll muted loop autoPlay>
            <source src={YakuSceneData.scene_5.bg} type="video/mp4" />
          </video>
        </span>
        {/* end scene 5 */}

        {/* scene 6 */}
        <span data-scroll-section>
          <FrontImage
            data-scroll
            src={YakuSceneData.scene_6.f}
            alt={YakuSceneData.scene_6.fAlt}
          />
          <MidImage
            data-scroll
            src={YakuSceneData.scene_6.m}
            alt={YakuSceneData.scene_6.mAlt}
          />
          <video data-scroll muted loop autoPlay>
            <source src={YakuSceneData.scene_6.bg} type="video/mp4" />
          </video>
        </span>
        {/* end scene 6 */}

        {/* scene 7 */}
        <span data-scroll-section>
          <video data-scroll muted loop autoPlay>
            <source src={YakuSceneData.scene_7.bg} type="video/mp4" />
          </video>
        </span>
        {/* end scene 7 */}

        {/* scene 8 */}
        <span data-scroll-section>
          <video data-scroll muted loop autoPlay>
            <source src={YakuSceneData.scene_8.bg} type="video/mp4" />
          </video>
        </span>
        {/* end scene 8 */}

        {/* scene 9 */}
        <span data-scroll-section>
          <video data-scroll muted loop autoPlay>
            <source src={YakuSceneData.scene_9.bg} type="video/mp4" />
          </video>
        </span>
        {/* end scene 9 */}

        {/* scene 10 */}
        <span data-scroll-section>
          <FrontImage
            data-scroll
            src={YakuSceneData.scene_10.f}
            alt={YakuSceneData.scene_10.fAlt}
          />
          <video data-scroll muted loop autoPlay>
            <source src={YakuSceneData.scene_10.bg} type="video/mp4" />
          </video>
        </span>
        {/* end scene 10 */}

        {/* scene 12 */}
        <span data-scroll-section>
          <video data-scroll muted loop autoPlay>
            <source src={YakuSceneData.scene_12.bg} type="video/mp4" />
          </video>
        </span>
        {/* end scene 12 */}

        <span data-scroll-section>
          <img
            data-scroll
            src="https://raw.githubusercontent.com/shansana/Simple-mouse-move-parallax/master/img/layer_1.png"
            alt=""
          />
          <img
            data-scroll
            src="https://raw.githubusercontent.com/shansana/Simple-mouse-move-parallax/master/img/layer_2.png"
            alt=""
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
            }}
          />
        </span>
        <span data-scroll-section>
          <img
            data-scroll
            src="https://raw.githubusercontent.com/shansana/Simple-mouse-move-parallax/master/img/layer_1.png"
            alt=""
          />
          <img
            data-scroll
            src="https://raw.githubusercontent.com/shansana/Simple-mouse-move-parallax/master/img/layer_2.png"
            alt=""
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
            }}
          />
        </span>
        <span data-scroll-section>
          <img
            data-scroll
            src="https://raw.githubusercontent.com/shansana/Simple-mouse-move-parallax/master/img/layer_1.png"
            alt=""
          />
          <img
            data-scroll
            src="https://raw.githubusercontent.com/shansana/Simple-mouse-move-parallax/master/img/layer_2.png"
            alt=""
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
            }}
          />
        </span>
        <span data-scroll-section>
          <img
            data-scroll
            src="https://raw.githubusercontent.com/shansana/Simple-mouse-move-parallax/master/img/layer_1.png"
            alt=""
          />
          <img
            data-scroll
            src="https://raw.githubusercontent.com/shansana/Simple-mouse-move-parallax/master/img/layer_2.png"
            alt=""
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
            }}
          />
        </span>

        {/* end tree */}
      </TaleSection>
    </LocomotiveScrollProvider>
  );
};

export default YakuStory;
