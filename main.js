"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = exports.taskArray = void 0;
var taskArray = /** @class */ (function () {
    function taskArray(arrayTask) {
        this.arrayTask = arrayTask;
    }
    taskArray.prototype.taskAdd = function (tarea) {
        if (tarea.isComplete == true) {
            this.arrayTask.push("".concat(tarea.task, " Completado"));
        }
        else {
            this.arrayTask.push("".concat(tarea.task, " No completado"));
        }
    };
    taskArray.prototype.taskDelete = function (tarea) {
        this.arrayTask.splice(this.arrayTask.indexOf("".concat(tarea.task, " No completado")), 1);
    };
    taskArray.prototype.taskComplete = function (tarea) {
        tarea.isComplete == !tarea.isComplete;
        this.arrayTask.splice(this.arrayTask.indexOf("".concat(tarea.task, " No completado")), 1);
        this.arrayTask.push("".concat(tarea.task, " Completado"));
    };
    taskArray.prototype.taskList = function () {
        console.log(this.arrayTask);
    };
    return taskArray;
}());
exports.taskArray = taskArray;
var Task = /** @class */ (function () {
    function Task(task, isComplete) {
        this.task = task;
        this.isComplete = isComplete;
    }
    return Task;
}());
exports.Task = Task;
var input = new Task('Nueva Tarea', true);
var input2 = new Task('Otra Tarea', true);
var input3 = new Task('Chanchito feliz', false);
var input4 = new Task('Chanchito triste', true);
var arrayprueba5 = new taskArray([]);
arrayprueba5.taskAdd(input);
arrayprueba5.taskAdd(input2);
arrayprueba5.taskAdd(input3);
arrayprueba5.taskAdd(input4);
arrayprueba5.taskList();
