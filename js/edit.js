import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
import { videoElementFactory } from "./videoElementFactory.js";
import { firebase } from "./firebase.js";

export const edit = async () => {
  const querySnapshot = await getDocs(collection(firebase.db, "courses", "htHYfZePtwRGjN32f9XH", "videos"));
  const videos = document.getElementById('videos');
  querySnapshot.forEach((doc) => {
    videos.appendChild(videoElementFactory(doc.data().name, doc.data().url));
  });
}


