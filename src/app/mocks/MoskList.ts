import { List } from "../model/list.model";
import { TodoMocker } from "./MockTodo";

export class ListMocker {

  static fakeList(): List {
    return new List(randomString(), 0)
  }
}



export function randomString() {
  return (Math.random() + 1).toString(36).substring(7);
}
