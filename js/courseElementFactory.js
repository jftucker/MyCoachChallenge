export const courseElementFactory = (name, src, thumbSrc, title, description, position) => {
    // <div class="course_item">
	// 				<p class="position">1</p>
	// 				<img class="thumb" src="https://firebasestorage.googleapis.com/v0/b/coach-266016.appspot.com/o/content%2Fai%2Fvideos%2Fbht7fCcR31h7RPS1gTTu%2Fthumb_bht7fCcR31h7RPS1gTTu.jpg?alt=media&token=128de502-bcab-49dd-bb85-302f4d001558">
	// 				<div class="course_details">
	// 					<h3>Lower Body Flow</h3>
	// 					<p>In this video, instructor Savannah McRae takes us through a 12 minute power flow Tor intermediates.</p>
	// 				</div>
	// 			</div>
    const divElement = document.createElement('div');
    divElement.classList.add("course_item");
    divElement.id="div-" + name;
    const paragraphElement = document.createElement('p');
    paragraphElement.classList.add("position");
    paragraphElement.innerText = position;
    divElement.appendChild(paragraphElement);
    const thumbnailElement = document.createElement('img');
    thumbnailElement.classList.add("thumb");
    thumbnailElement.src = thumbSrc;
    divElement.appendChild(thumbnailElement);
    const courseDetailsDivElement = document.createElement('div');
    courseDetailsDivElement.classList.add("course_details");
    divElement.appendChild(courseDetailsDivElement);
    const h3Element = document.createElement('h3');
    h3Element.innerText = title;
    courseDetailsDivElement.appendChild(h3Element);
    const detailParElement = document.createElement('p');
    detailParElement.innerText = description;
    courseDetailsDivElement.appendChild(detailParElement);


    return divElement;
}