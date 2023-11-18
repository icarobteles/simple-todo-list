import { Injectable, computed, signal } from "@angular/core";
import { ITask } from "../interfaces";
import { v4 as uuidv4 } from "uuid";

@Injectable({
  providedIn: "root"
})
export class TasksService {
  private _tasks = signal<ITask[]>([]);

  get tasks() {
    return this._tasks();
  }

  public totalTasksCompleted = computed(
    () => this._tasks().filter(task => task.isCompleted).length
  );
  public totalTasks = computed(() => this._tasks().length);

  public findTask(id: string): ITask | null {
    return this.tasks.find(task => task.id === id) ?? null;
  }

  public create(description: string) {
    const uniqueID = uuidv4();
    const newTask: ITask = { id: uniqueID, description, isCompleted: false };
    this._tasks.update(prevTasks => [...prevTasks, newTask]);
  }

  public remove(id: string) {
    this._tasks.update(prevTasks => prevTasks.filter(task => task.id !== id));
  }

  public toggleComplete(id: string) {
    console.log(id);
    this._tasks.update(prevTasks =>
      prevTasks.map(task => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      })
    );
    console.log(this.tasks);
  }
}
