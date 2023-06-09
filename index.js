let draggeditem = "null";

//DragStart Event
const dragStart = (event) => {
  draggeditem = event.target;
  event.dataTransfer.setData("text", event.target.src);
  event.dataTransfer.setDragImage(event.target, 0, 0);
  draggeditem.style.opacity = "0.1";
};
//Dragover Event
function dragOver(event) {
  event.preventDefault();
}
//Drop Event
function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  var img = document.createElement("img");
  img.src = data;
  event.target.appendChild(img);
  img.width = 150;
  img.height = 150;
  draggeditem.style.display = "none";

 //calling function to display success message
  displaySuccessMessage();

  setTimeout(() => {
    SuccessMessage();
  }, 1000);
}

//Reset function
function reset() {
  var container1 = document.querySelector(".container1");
  var container2 = document.querySelector(".container2");
  container1.innerHTML = `
    <h2>Images</h2>
    <img draggable="true" src="https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80" alt="Desktop_photo" ondragstart="dragStart(event)">

    <img draggable="true"src="https://plus.unsplash.com/premium_photo-1686050416689-1b1f64fd5000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80" alt="Roadpic>" ondragstart="dragStart(event)">

    <img draggable="true"src="https://images.unsplash.com/photo-1685897938422-31c6f431e87e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=373&q=80" alt="drygrass" ondragstart="dragStart(event)">
    `;
  container2.innerHTML = " <h2>Drop Here</h2>";
  document.getElementById("message").style.display = "none";
}

// Function definition to display a success message
function displaySuccessMessage() {
  document.getElementById("message").innerHTML = " Successful";
}
function SuccessMessage() {
  document.getElementById("message").innerHTML = "";
}
