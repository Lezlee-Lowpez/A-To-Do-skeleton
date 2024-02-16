const complimentBtn = document.getElementById("complimentButton");
const fortuneBtn = document.getElementById("fortuneButton");
const mySection = document.querySelector('section');
const tasksBtn = document.getElementById("allTasksButton");
const addNewBtn = document.getElementById("newTaskButton");
const form = document.getElementById('newTaskForm');
const deleteForm = document.getElementById('deleteTaskForm');

const baseURL = "http://localhost:4000/api/";

//Where the functions will go
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};


const getFortune = () => {
    axios.get(`${baseURL}fortune`).then(res => {
        const data = res.data;
        console.log(data)
        alert(data);
    });
}

//Adding function Submit Handler here at the top
function submitHandlerForAddTask(e) {
    e.preventDefault();

    let newTaskInput = document.querySelector('#newTask');
    let task = newTaskInput.value
    

    let bodyObj = {
        task: task,
    };

    addATask(bodyObj);

    alert("Task added!")

    newTaskInput.value = '';
}

function submitHandlerForDeleteTask(e) {
    e.preventDefault();

    let deleteTaskInput = document.querySelector('#deleteTask');
    let taskId = parseInt(deleteTaskInput.value);

    axios.delete(`${baseURL}tasks/${taskId}`).then(res => {
        alert(res.data);
        getMyTasks();
    })
}

// First feature that gets all the tasks and displays it to the user
const getMyTasks = () => {
    axios.get(`${baseURL}tasks`).then(res => {
        const data = res.data;

        mySection.innerHTML = "";

        console.log("Ok here goes the for loop")
        data.forEach(obj => {
            console.log(obj.task)

            const h2Element = document.createElement('h2');
            h2Element.textContent = obj.task;
            mySection.appendChild(h2Element);
        })

    })
}

// Second Feature that will allow users to visually add another task to the list
// 
const addATask = (bodyObj) => {
    axios.post(`${baseURL}tasks`, bodyObj).then(res => {
        getMyTasks();
    })
}

//third and final feature that will delete a specified task off the list

//Event listeners 
complimentBtn.addEventListener('click', getCompliment);
fortuneBtn.addEventListener('click', getFortune);
tasksBtn.addEventListener('click', getMyTasks);
form.addEventListener('submit', submitHandlerForAddTask);
deleteForm.addEventListener('submit', submitHandlerForDeleteTask);
