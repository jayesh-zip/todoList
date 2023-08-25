const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// inputBox.addEventListener("keypress",Task);
// function Task(event) {
//     if(event.keyCode === 13 && inputBox.value === ''){
//         alert("You must write something");
//     } 
//     else if(event.keyCode === 13) {
//         let li = document.createElement("li");
//         li.innerHTML = inputBox.value;
//         listContainer.appendChild(li);
//         let span = document.createElement("span");
//         span.innerHTML = "\u00d7";
//         li.appendChild(span);
//         inputBox.value = "";
//     }
//     saveData(); 
// }

//
//  function list() {
    //     let li = document.createElement("li");
    //     liContainer.appendChild(li)
    //     let span = document.createElement("span");
    //     span.innerHTML = "\u00d7";
//     li.appendChild(span);
//     saveData();
//  }

//This funtcion is use for showing meassage and create li tag and note;
function addTask() {
     if(inputBox.value === '') {
         alert("You must write something");
        }
        else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

//This function is doing remove note and line-through the note;
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// This funtion is doing, by default values are remove;
const liContainer = document.getElementById("container");
liContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//This function is use for save changes in your todo list;
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//This funtion is use for, show all changes in your todo list after referes your page;
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();