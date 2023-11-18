import { CommonModule, NgClass } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject
} from "@angular/core";
import { TasksService } from "../../services";

@Component({
  selector: "app-task-stat",
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: "./task-stat.component.html",
  styleUrl: "./task-stat.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskStatComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) variant!: "total" | "completed";

  private tasksService = inject(TasksService);

  get displayValue() {
    const totalTasks = this.tasksService.totalTasks();

    if (totalTasks === 0) return totalTasks;

    switch (this.variant) {
      case "completed":
        const totalTasksCompleted = this.tasksService.totalTasksCompleted();
        return `${totalTasksCompleted} de ${totalTasks}`;
      case "total":
        return totalTasks;
    }
  }
}
