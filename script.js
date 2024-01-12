document.addEventListener("DOMContentLoaded",function(){
const addTaskButton = document.getElementById("addTask");
const popup = document.querySelector(".addTaskPopUp");
const firstBox= document.querySelector(".todoBox");
const submitButton = document.getElementById("submit");
const taskInfo = document.getElementById("taskInfo");
const taskInfoDescription = document.getElementById("taskInfoDescription");
const list = document.querySelector(".list");
// const deleteTask = document.getElementById("deleteTask");




const tasksList = [];

addTaskButton.addEventListener("click",()=>{
    popup.classList.toggle("hidden");
    firstBox.classList.add("hidden");
    list.classList.add("hidden");
    submitButton.addEventListener("click",taskAddition);
});


function taskAddition(){
    const object = {
        id:`${taskInfo.value}-${taskInfoDescription.value}`,
        text:taskInfo.value,
        description:taskInfoDescription.value
    };
    tasksList.push(object);
    popup.classList.toggle("hidden");
    firstBox.classList.toggle("hidden");
    // list.classList.toggle("hidden");
    showList();
    taskInfo.value="";
    taskInfoDescription.value="";
    list.classList.toggle("hidden");
} 

function showList() {
    list.innerHTML = ""; // Clear existing content before adding new tasks

    tasksList.forEach(i => {
        list.innerHTML += `
        <div class="listMargins">
        <fieldset><strong>Task</strong>: ${i.text}</fieldset>
        <fieldset><strong>Description</strong>: ${i.description}</fieldset>
        <button id="deleteTask" class="button-32">Delete Task</button>
        </div>
        `;
        //FIX DELETE FEATURE
        const deleteTask = document.getElementById("deleteTask");
        deleteTask.addEventListener("click",deleteCurrentTask);
    });
    console.log(tasksList);
   
    

}





function deleteCurrentTask(){
    // const removeIndex = tasksList.findIndex(index => index.id===id);
    if(removeIndex !== -1){
        tasksList.splice(removeIndex,1);
        showList();
    }
    else{
        alert("not found");
    }

}




});

