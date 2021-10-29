import { Todo } from "../model/todo.model";

export class TodoMocker {

  // static fakeTodo(): Todo {
  //   return new Todo(randomString())
  // }
}



export function randomString() {
  return (Math.random() + 1).toString(36).substring(7);
}
