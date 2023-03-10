/*
       Задание:
       Сделайте так, чтобы в каждой созданной задаче, после текста задачи создавалась кнопка "Удалить".
       При нажатии на которую вся задача удалялась из списка задач.
       */
       let taskNameInput = document.querySelector("#task-name-input");
       let addTaskButton = document.querySelector("#add-task-btn");
       let startMessage = document.querySelector("#start-message");
       let taskList = document.querySelector(".task-list");
       
       addTaskButton.addEventListener("click", addTaskHandler);
       
       function createTask(text) {
           let div = document.createElement("div");
           div.classList.add("task");
       
           let input = document.createElement("input");
           input.addEventListener("click", changeTaskState);
           input.type = "checkbox";
       
           let p = document.createElement("p");
           p.innerText = text;
       
           let button = document.createElement("button");
           button.id = "delete-button";
           button.textContent = "Видалити";
           button.addEventListener("click", deleteTask);
       
           div.append(input);
           div.append(p);
           div.append(button);
       
           return div;
       }
       
       function deleteTask() {
           this.parentNode.remove();
           let tasks = document.querySelector(".task-list");
           let taskDivs = tasks.querySelectorAll("div");
           console.log(taskDivs);
           if (taskDivs.length == 0) {
               startMessage.hidden = false;
           }
       }
       
       function changeTaskState() {
           if (this.checked) {
               this.parentElement.classList.add("completed");
           } else {
               this.parentElement.classList.remove("completed");
           }
       }
       
       function addTaskHandler() {
           if (taskNameInput.value) {
               if (!startMessage.hidden) startMessage.hidden = true;
       
               let newTask = createTask(taskNameInput.value);
               taskList.append(newTask);
               taskNameInput.value = "";
           } else {
               alert("введите имя задачи");
           }
       }