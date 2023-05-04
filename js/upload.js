import { firebase } from "./firebase.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-storage.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
import { extractThumbnail } from "./extractThumbnail.js";
import { videoElementFactory } from "./videoElementFactory.js";

// Initialize Firebase
const app = firebase.app;

export const upload = async () => {
  const storage = getStorage(app);
  const videoFile = document.querySelector("#upload-video").files[0];
  const videoName = new Date() + '-' + videoFile.name;
  const videoRef = ref(storage, videoName);
  const title = document.getElementById('upload-title').value;
  const description = document.getElementById('upload-desc').value;
  const course = {
    title: title,
    description: description,
    name: videoFile.name,
  }

  const videoMetadata = {
    contentType: videoFile.type
  };

  const videoTask = uploadBytes(videoRef, videoFile, videoMetadata);

  videoTask
  .then(snapshot => getDownloadURL(snapshot.ref))
  .then(async url => {
    alert("uploaded successfully");
    course.url = url;
    const videoElement = videoElementFactory(videoFile.name, url);
    const thumbnail = await extractThumbnail(videoElement);
    const thumbnailName = 'thumb-' + videoName;
    const thumbnailRef = ref(storage, thumbnailName);
    const thumbnailMetadata = {
      contentType: thumbnail.type
    }
    const thumbnailTask = uploadBytes(thumbnailRef, thumbnail, thumbnailMetadata);
  
    thumbnailTask
    .then(snapshot => getDownloadURL(snapshot.ref))
    .then(async url => {
      course.thumbUrl = url;

      try {
        const docRef = await addDoc(collection(firebase.db, "courses", "htHYfZePtwRGjN32f9XH", "videos"), course);
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    });
  });
}