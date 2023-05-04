export const extractThumbnail = (videoElement) => {
    return new Promise((resolve, reject) => {
        videoElement.addEventListener('loadeddata', async () => {
          setTimeout(() => {
            videoElement.currentTime = 0.1;
          }, 200);
          videoElement.addEventListener('seeked', async () => {
            const canvas = document.createElement("canvas");
            canvas.width = videoElement.videoWidth;
            canvas.height = videoElement.videoHeight;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
            ctx.canvas.toBlob(
                blob => {
                    resolve(blob);
                },
                "image/jpeg"
            );
          });
        });
      });
}