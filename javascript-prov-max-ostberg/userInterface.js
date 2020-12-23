import Fetch from './fetch.js'

class Ui {
    /* Selectors */
    static selectors = {
        form: document.querySelector('.to-do-form'),
        toDoUl: document.querySelector('.to-do-list'),
        input: document.querySelector('.input-todo')
    }

    static utilities = {
        textArray: []
    }

    /* Main Function that will go in app.js */
    static getDataFromJson(){
        Fetch.getData().then((data) => {
            data.forEach((object) => {
                this.utilities.textArray.push(object.todoDescription)
            });
            this.tasksContentLoaded()
            this.addTask()
            this.checkTask()
            this.removeLi()
        })
    }
    
    /* The 4 tasks that will be loaded when app runs */
    static tasksContentLoaded(){
        this.utilities.textArray.forEach((task) => {
            this.selectors.toDoUl.innerHTML += this.oneLi(task)
        })
    }

    /* Add a new task to the list */
    static addTask(){
        this.selectors.form.addEventListener('submit', (e) =>{
            e.preventDefault()
            if(this.selectors.input.value !== ''){
                this.selectors.toDoUl.innerHTML += this.oneLi(this.selectors.input.value)
            } else {
                alert('enter something in input');
            }
        })
    }

    /* Trashcan Event */
    static removeLi(){
        this.selectors.toDoUl.addEventListener('click', (e) => {
            if(e.target.classList.contains('trashcan')){
                e.target.parentNode.remove();
            }
        })
    }

    /* Checked event */
    static checkTask(){
        this.selectors.toDoUl.addEventListener('click', (e) => {
            if(e.target.classList.contains('todo-check')){
                e.target.classList.toggle('checked')
            }
        })
    }

    /* HTML functions */
    static oneLi(text){
        const html = `
        <li class="todo-item">
            <i class="far fa-check-circle todo-check"></i>
            <p class="todo-text">${text}</p>
            <i class="fas fa-trash-alt trashcan"></i>
        </li>
        `;
        return html;
    }
    
}

export default Ui;