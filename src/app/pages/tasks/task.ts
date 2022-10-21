import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { User } from "./user";

export class Task {
    public id = 0;

    constructor(public title: string, public user: User) {}

    toFormGroup(formBuilder: FormBuilder): FormGroup {
        return formBuilder.group({
            title: new FormControl<string>(this.title, Validators.required),
            user: this.user.toFormGroup(formBuilder)
        });
    }
}
