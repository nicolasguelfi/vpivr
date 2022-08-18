import "./styles.css";
import "cloudinary-video-player/dist/cld-video-player.min.css";

import VideoPlayer from "./Video";

export default function App() {
  return (
    <div className="App">
      <h1>Interactive Video</h1>
      <VideoPlayer></VideoPlayer>
      {/* React component for video player*/}
    </div>
  );
}
