import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject
} from "@angular/core";
import { TasksService } from "../../services";

@Component({
  selector: "app-btn-delete",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./btn-delete.component.html",
  styleUrl: "./btn-delete.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BtnDeleteComponent {
  @Input() taskId!: string;

  private tasksService = inject(TasksService);

  onClick(): void {
    this.tasksService.remove(this.taskId);
  }
}
