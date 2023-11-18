import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "app-empty-task",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./empty-task.component.html",
  styleUrl: "./empty-task.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmptyTaskComponent {}
