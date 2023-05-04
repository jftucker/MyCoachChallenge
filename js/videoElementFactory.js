export const videoElementFactory = (name, src) => {
    const videoElement = document.createElement('video');
    const sourceElement = document.createElement('source');
    videoElement.id = "vid-" + name;
    videoElement.width = "320";
    videoElement.height = "240";
    videoElement.controls = true;
    videoElement.useCORS = true;
    sourceElement.id = "source-" + name;
    sourceElement.src = src;
    videoElement.appendChild(sourceElement);
    videoElement.setAttribute('crossOrigin', 'anonymous');

    return videoElement;
}