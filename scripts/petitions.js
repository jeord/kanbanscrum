const API_URL ="https://my-json-server.typicode.com/jeord/kanbanscrum/tasks"

let tasks = []

axios.get(API_URL) 
    .then(resp => fillTasks(resp.data))
    .catch(err => console.log(err))


const fillTasks = (data) => {
    data.map(d => {
        let newTask = document.createElement("article")
        let taskTtile = document.createElement("h3")
        taskTtile.innerText = d.title
        newTask.appendChild(taskTtile)

        let column = document.getElementById("doneTasks")
        column.appendChild(newTask)
    })
}