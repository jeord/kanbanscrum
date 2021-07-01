const API_URL ="https://my-json-server.typicode.com/jeord/kanbanscrum/tasks"

let tasks = []

axios.get(API_URL) 
    .then(resp => fillTasks(resp.data))
    .catch(err => console.log(err))


const fillTasks = (data) => {
    data.map(d => {
        let newTask = document.createElement("article")
        newTask.classList.add("task")
        let taskTtile = document.createElement("h3")
        let responsableTask = document.createElement("p")
        responsableTask.innerHTML = `<span>Responsable:</span> ${d.person}`
        let deadLine = document.createElement("p")
        deadLine.innerHTML = `<span>Plazo:</span> ${unixToDate(d.deadline)}`


        taskTtile.innerText = d.title
        newTask.appendChild(taskTtile)
        newTask.appendChild(responsableTask)
        newTask.appendChild(deadLine)

        let columnToDo = document.getElementById("toDoTasks")
        let columnInProgress = document.getElementById("inprogressTasks")
        let columnDone = document.getElementById("doneTasks")

        switch(d.state) {
            case "to-do":
                columnToDo.appendChild(newTask)
                break;
            case "in-progress":
                columnInProgress.appendChild(newTask)
                break;
            default:
                columnDone.appendChild(newTask)
        } 
        

        
    })
}