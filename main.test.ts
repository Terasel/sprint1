import { describe, expect, test } from '@jest/globals';
import { Task } from './main';
import { taskArray } from './main';




describe('main module', () => {
  test('create a task', () => {
    let input = new Task('Nueva Tarea', true);
    expect(input.isComplete).toBe(true);
    expect(input.task).toBe('Nueva Tarea');
  });
  test('create an array', () => {
    let arrayprueba = new taskArray([]);
    expect(arrayprueba.arrayTask).toStrictEqual([]);
  });
  test('add a task to the array', () => {
    let input2 = new Task('Otra Tarea', true);
    let arrayprueba2 = new taskArray([]);
    arrayprueba2.taskAdd(input2);
    expect(arrayprueba2.arrayTask).toStrictEqual(['Otra Tarea Completado']);
  })
  test('mark a task as complete', () => {
    let input3 = new Task('Chanchito feliz', false);
    let arrayprueba3 = new taskArray([]);
    arrayprueba3.taskAdd(input3);
    arrayprueba3.taskComplete(input3);
    expect(arrayprueba3.arrayTask).toStrictEqual(['Chanchito feliz Completado']);
  })
  test('delete a task', () => {
    let input4 = new Task('Chanchito triste', true);
    let arrayprueba4 = new taskArray([]);
    arrayprueba4.taskAdd(input4);
    arrayprueba4.taskDelete(input4);
    expect(arrayprueba4.arrayTask).toStrictEqual([]);
  })
  test('show the array', () => {
    let input = new Task('Nueva Tarea', true);
    let input2 = new Task('Otra Tarea', true);
    let input3 = new Task('Chanchito feliz', false);
    let input4 = new Task('Chanchito triste', true);
    let arrayprueba5 = new taskArray([]);
    arrayprueba5.taskAdd(input);
    arrayprueba5.taskAdd(input2);
    arrayprueba5.taskAdd(input3);
    arrayprueba5.taskAdd(input4);
    const logSpy = jest.spyOn(console, 'log');
    arrayprueba5.taskList();

    expect(logSpy).toHaveBeenCalledWith([
      'Nueva Tarea Completado',
      'Otra Tarea Completado',
      'Chanchito feliz No completado',
      'Chanchito triste Completado'
    ]);
  })
})
