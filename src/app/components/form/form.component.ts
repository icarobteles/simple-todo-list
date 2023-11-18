import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal
} from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import { TasksService } from "../../services";

@Component({
  selector: "app-form",
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: "./form.component.html",
  styleUrl: "./form.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent {
  hasBeenSubmitted = false;
  form = new FormGroup({
    description: new FormControl("", {
      nonNullable: true,
      validators: [Validators.required]
    })
  });

  private tasksService = inject(TasksService);

  formIsInvalid(): boolean {
    const control = this.form.controls.description;
    if (!control) return false;
    return (
      control.invalid &&
      (control.touched || control.dirty || this.hasBeenSubmitted)
    );
  }

  formError = signal(false);

  onSubmit(): void {
    this.hasBeenSubmitted = true;

    if (this.form.valid) {
      const description = this.form.controls.description.value;
      const trimmedDescription = description.trim();
      this.tasksService.create(trimmedDescription);
      this.form.reset();
      this.hasBeenSubmitted = false;
    }
  }
}
