// user input form
const form  = document.querySelector('form')
form.addEventListener('submit', addTask)

// tasklist
const taskList = document.querySelector('ul')
taskList.addEventListener('click', delTask)

// delete button link
const deleteBtn = document.querySelector('#delete-tasks')
deleteBtn.addEventListener('click', delTasks)

function delTasks(event){
        // taskList.innerHTML = ''
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
    }
}

// delTask
function delTask(event){
    if(event.target.textContent === 'X'){
        if(confirm('Oled kindel?')) {
            event.target.parentElement.remove()
        }
    }
}

// add task function
function addTask(event){
    // get task value from form input
    const task = document.querySelector('#task').value
    //get element from DOM
const taskList = document.querySelector('ul')
    console.log(taskList)
    // create element to Dom
    const li = document.createElement('li')
    //add CSS class
    li.className = 'collection-item'
    //add text to element
    const text = document.createTextNode(task)
    li.appendChild(text)
    // create link
    const link = document.createElement('a')
    // add css style
    link.className = 'secondary-content'
    // add text to link
    link.appendChild(document.createTextNode('X'))
    // add href attribute
    link.setAttribute('href', '#')
    // add link to Li
    li.appendChild(link)
    // add li to tasklist
    taskList.appendChild(li)
    // save task to localStorage
    taskStorage(task)
    // clear from input value
    document.querySelector('#task').value = ''
    event.preventDefault()
}

function taskStorage(task){
    let tasks
    if(localStorage.getItem('tasks') === null){
  tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks))
}