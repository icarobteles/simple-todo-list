import { CommonModule, NgClass } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { CheckboxComponent } from "../checkbox/checkbox.component";
import { BtnDeleteComponent } from "../btn-delete/btn-delete.component";
import { ITask } from "../../interfaces";

@Component({
  selector: "app-task",
  standalone: true,
  imports: [CommonModule, CheckboxComponent, BtnDeleteComponent, NgClass],
  templateUrl: "./task.component.html",
  styleUrl: "./task.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskComponent {
  @Input() task!: ITask;
}
