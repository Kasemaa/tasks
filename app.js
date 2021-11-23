// user input form
const form  = document.querySelector('form')
form.addEventListener('submit', addTask)


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
    // add li to tasklist
    taskList.appendChild(li)
    // clear from input value
    document.querySelector('#task').value = ''
    event.preventDefault()
}