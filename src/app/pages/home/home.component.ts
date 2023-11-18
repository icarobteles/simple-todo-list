import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FormComponent, TaskStatComponent } from "../../components";
import { TasklistComponent } from "../../components/tasklist/tasklist.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, FormComponent, TasklistComponent, TaskStatComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {}
