import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject
} from "@angular/core";
import { TaskComponent } from "../task/task.component";
import { TasksService } from "../../services";
import { EmptyTaskComponent } from "../empty-task/empty-task.component";

@Component({
  selector: "app-tasklist",
  standalone: true,
  imports: [CommonModule, TaskComponent, EmptyTaskComponent],
  templateUrl: "./tasklist.component.html",
  styleUrl: "./tasklist.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasklistComponent {
  private tasksService = inject(TasksService);

  get tasks() {
    return this.tasksService.tasks;
  }
}
