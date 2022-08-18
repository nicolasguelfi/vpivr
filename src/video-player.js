import "cloudinary-video-player";
import cloudinary from "cloudinary-core";

function setupPlayer() {
  const cld = cloudinary.Cloudinary.new({ cloud_name: "demo" });
  var player = cld.videoPlayer("player", {
    interactionDisplay: {
      theme: {
        template: "shadowed"
      },
      layout: {
        enable: true,
        showAgain: true
      }
    }
  });

  var sources = {
    top:
      "https://res.cloudinary.com/demo/video/upload/docs/my_video_top_zoom.mp4",
    bottom:
      "https://res.cloudinary.com/demo/video/upload/docs/my_video_bottom_zoom.mp4"
  };

  player.source("docs/my_video", {
    interactionAreas: {
      enable: true,
      template: "portrait",
      onClick: function (event) {
        var src = sources[event.item.id];
        if (event.item.id === "middle") {
          window.alert("Middle clicked");
        } else {
          event.zoom(src);
        }
      }
    }
  });
  return;
}

export default setupPlayer;
