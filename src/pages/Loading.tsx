import { VideoBackground, LoadingContainer } from "../GlobalStyle";
import loading from "../assets/videos/LoadingScene.mp4";
const Loading = () => {
  return (
    <LoadingContainer>
      <VideoBackground muted loop autoPlay>
        <source src={loading} type="video/mp4" />
      </VideoBackground>
    </LoadingContainer>
  );
};

export default Loading;
