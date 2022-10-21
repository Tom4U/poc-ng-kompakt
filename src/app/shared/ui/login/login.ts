import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

export class Login {
    constructor(public username = '', public password = '') {}

    toForm(formBuilder: FormBuilder): FormGroup {
        return formBuilder.group({
            username: new FormControl<string>(this.username, Validators.required),
            password: new FormControl<string>(this.password, Validators.required)
        })
    }
}
