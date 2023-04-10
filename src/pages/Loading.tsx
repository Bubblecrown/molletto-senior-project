import { VideoBackground } from "../GlobalStyle";
import loading from '../assets/videos/Loading.mp4'
const Loading = () => {
  return (
    <VideoBackground muted loop autoPlay>
      <source src={loading} type="video/mp4" />
    </VideoBackground>
  );
};

export default Loading;
