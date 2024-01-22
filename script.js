function addTask() {
    var taskName = document.getElementById("taskName").value;
    var taskDate = document.getElementById("taskDate").value;
    var taskTime = document.getElementById("taskTime").value;
    var taskPriority = document.getElementById("taskPriority").value;

    if (taskName && taskDate && taskTime && taskPriority) {
        var taskList = document.getElementById("taskList");

        var li = document.createElement("li");
        li.innerHTML = `<span>${taskName}</span> - ${taskDate} ${taskTime} <span class="${taskPriority.toLowerCase()}">${taskPriority}</span>`;
        taskList.appendChild(li);

        
        document.getElementById("taskForm").reset();
    } else {
        alert("Please fill in all the fields.");
    }
}
