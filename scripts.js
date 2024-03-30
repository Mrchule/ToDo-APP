
const inputTask = document.querySelector(".input");
const Ul = document.querySelector(".ul");
let count = 1;
const todos=JSON.parse(localStorage.getItem('element'));
if(todos){
  todos.forEach(element =>{
    console.log(element);
    const li=document.createElement('li');
    li.innerText=element.text;
    li.classList.add('add');
    Ul.appendChild(li);
    if(!element.completed){
      li.addEventListener("click", () => {
        li.classList.toggle("remove");
        UpdateEl();
      });
      li.addEventListener("contextmenu", () => {
        li.remove();
        UpdateEl();
      });
      }
    })
  }
function Addtask() {

  if (inputTask.value != "") {
    const newList = document.createElement("li");
    newList.classList.add("add");
    newList.innerHTML = count + ". " + inputTask.value;
    inputTask.value = "";
    Ul.appendChild(newList);
    UpdateEl();
    newList.addEventListener("click", () => {
      newList.classList.toggle("remove");
      UpdateEl();
    });
    newList.addEventListener("contextmenu", () => {
      newList.remove();
      UpdateEl();
    });
    count++;
  } else {
    alert("please enter task");
  }
}

function UpdateEl(){
  liss=document.querySelectorAll('li');
  const todos=[];
  liss.forEach(element => {
        todos.push({
            'text':element.innerText,
            'completed':element.classList.contains("remove"),
        });
    localStorage.setItem("element",JSON.stringify(todos));
  }); 

}