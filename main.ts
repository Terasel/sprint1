


export class taskArray {
    arrayTask: string[];

    constructor(arrayTask: string[]) {
        this.arrayTask = arrayTask;
    }
    taskAdd(tarea:any) {
        if (tarea.isComplete == true) {
            this.arrayTask.push(`${tarea.task} Completado`);
        } else {
            this.arrayTask.push(`${tarea.task} No completado`);
        }
    }
    taskDelete(tarea:any) {
        this.arrayTask.splice(this.arrayTask.indexOf(`${tarea.task} No completado`), 1);
    }
    taskComplete(tarea:any) {
        tarea.isComplete == !tarea.isComplete;
        this.arrayTask.splice(this.arrayTask.indexOf(`${tarea.task} No completado`), 1);
        this.arrayTask.push(`${tarea.task} Completado`);
    }
    taskList() {
        return this.arrayTask;
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



let arrayprueba = new taskArray([]);

console.log(arrayprueba.arrayTask);

