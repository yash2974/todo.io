document.addEventListener("DOMContentLoaded", function () {
    const addTaskButton = document.getElementById("addTask");
    const popup = document.querySelector(".addTaskPopUp");
    const firstBox = document.querySelector(".todoBox");
    const submitButton = document.getElementById("submit");
    const taskInfo = document.getElementById("taskInfo");
    const taskInfoDescription = document.getElementById("taskInfoDescription");
    const list = document.querySelector(".list");
    const cancelButton = document.getElementById("cancel");

    const tasksList = [];

    addTaskButton.addEventListener("click", () => {
        popup.classList.toggle("hidden");
        firstBox.classList.add("hidden");
        list.classList.add("hidden");
        submitButton.addEventListener("click", taskAddition);
        cancelButton.addEventListener("click", cancelTaskAddition);
    });

    function taskAddition() {
        const object = {
            id: `${taskInfo.value}-${taskInfoDescription.value}`,
            text: taskInfo.value,
            description: taskInfoDescription.value
        };
        tasksList.push(object);
        popup.classList.toggle("hidden");
        firstBox.classList.toggle("hidden");
        showList();
        taskInfo.value = "";
        taskInfoDescription.value = "";
        list.classList.toggle("hidden");
    }

    function showList() {
        list.innerHTML = ""; // Clear existing content before adding new tasks

        tasksList.forEach((task, index) => {
            list.innerHTML += `
                <div class="listMargins">
                    <fieldset>
                        <strong>Task</strong>: ${task.text}
                        <br>
                        <strong>Description</strong>: ${task.description}
                        <br>
                        <button class="deleteButton" data-index="${index}">Delete</button>
                    </fieldset>
                </div>
            `;
        });

        // Attach event listener to delete buttons
        document.querySelectorAll(".deleteButton").forEach(button => {
            button.addEventListener("click", deleteTask);
        });
    }

    function deleteTask(event) {
        const index = event.target.getAttribute("data-index");
        tasksList.splice(index, 1);
        showList();
    }
    function cancelTaskAddition() {
        popup.classList.toggle("hidden");
        firstBox.classList.toggle("hidden");
        taskInfo.value = "";
        taskInfoDescription.value = "";
        list.classList.toggle("hidden");
    }
});
