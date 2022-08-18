import React, { Component } from "react";
import setupPlayer from "./video-player";

class VideoPlayer extends Component {
  componentDidMount() {
    setupPlayer();
  }

  render() {
    const videoObj = (
      <div style={{ width: "300px" }}>
        <video
          id="player"
          controls
          muted
          className="cld-video-player cld-fluid"
        ></video>
      </div>
    );

    return <div>{videoObj}</div>;
  }
}

export default VideoPlayer;
