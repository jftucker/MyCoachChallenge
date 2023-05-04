import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
import { courseElementFactory } from "./courseElementFactory.js";
import { firebase } from "./firebase.js";

export const edit = async () => {
  const querySnapshot = await getDocs(collection(firebase.db, "courses", "htHYfZePtwRGjN32f9XH", "videos"));
  const videos = document.getElementById('course-edit');
  var i = 1;
  querySnapshot.forEach((doc) => {
    videos.appendChild(courseElementFactory(doc.data().name, doc.data().url, doc.data().thumbUrl, doc.data().title, doc.data().description, i));
    i++;
  });
}


