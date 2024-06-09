


export class taskArray {
    arrayTask: string[];

    constructor(arrayTask: string[]) {
        this.arrayTask = arrayTask;
    }
    taskAdd(tarea) {
        if (tarea.isComplete == true) {
            this.arrayTask.push(`${tarea.task} Completado`);
        } else {
            this.arrayTask.push(`${tarea.task} No completado`);
        }
    }
    taskDelete(tarea) {
        this.arrayTask.splice(this.arrayTask.indexOf(`${tarea.task} No completado`), 1);
    }
    taskComplete(tarea) {
        tarea.isComplete == !tarea.isComplete;
        this.arrayTask.splice(this.arrayTask.indexOf(`${tarea.task} No completado`), 1);
        this.arrayTask.push(`${tarea.task} Completado`);
    }
    taskList() {
        console.log(this.arrayTask);
    }
}

export class Task {
    task: string;
    isComplete: boolean;

    constructor(task: string, isComplete: boolean) {
        this.task = task;
        this.isComplete = isComplete;
    }

}


let input = new Task('Nueva Tarea', true);
let input2 = new Task('Otra Tarea', true);
let input3 = new Task('Chanchito feliz', false);
let input4 = new Task('Chanchito triste', true);
let arrayprueba5 = new taskArray([]);
arrayprueba5.taskAdd(input);
arrayprueba5.taskAdd(input2);
arrayprueba5.taskAdd(input3);
arrayprueba5.taskAdd(input4);


arrayprueba5.taskList();

