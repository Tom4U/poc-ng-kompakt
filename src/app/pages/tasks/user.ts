import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";

export class User {
  constructor(public name: string) {}

  toFormGroup(formBuilder: FormBuilder): FormGroup {
    return formBuilder.group({
      name: new FormControl<string>(this.name, Validators.required),
    });
  }
}