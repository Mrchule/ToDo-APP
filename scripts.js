
const inputTask = document.querySelector(".input");
const Ul = document.querySelector(".ul");
let count = 1;
function Addtask() {
  if (inputTask.value != "") {
    const newList = document.createElement("li");
    newList.classList.add("add");
    newList.innerHTML = count + ". " + inputTask.value;
    inputTask.value = "";
    Ul.appendChild(newList);
    newList.addEventListener("click", () => {
      newList.classList.toggle("remove");
    });
    newList.addEventListener("dbclick", () => {
      alert("nahi ho raha hai");
    });
    count++;
  } else {
    alert("please enter task");
  }
}
