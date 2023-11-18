import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  inject,
  signal
} from "@angular/core";
import { TasksService } from "../../services";

@Component({
  selector: "app-checkbox",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./checkbox.component.html",
  styleUrl: "./checkbox.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent implements OnInit {
  @Input() taskId!: string;

  isCompleted = false;

  private tasksService = inject(TasksService);

  ngOnInit(): void {
    this.isCompleted =
      this.tasksService.findTask(this.taskId)?.isCompleted ?? false;
  }

  onChange(): void {
    this.tasksService.toggleComplete(this.taskId);
  }
}
