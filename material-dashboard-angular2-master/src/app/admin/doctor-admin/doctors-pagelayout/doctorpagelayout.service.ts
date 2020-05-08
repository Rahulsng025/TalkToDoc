import { Injectable, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";


@Injectable({
    providedIn: "root",
})

export class doctorspagelayoutService {

    constructor() {

    }

    form: FormGroup = new FormGroup({
        $key: new FormControl(null),
        name: new FormControl('', Validators.required),
        department: new FormControl('', Validators.required),
        speciality: new FormControl('', Validators.required),
        degrees: new FormControl('', Validators.required),
        mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
        email: new FormControl('', Validators.email),
        training: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),

    });

    initializeFormGroup() {
        this.form.setValue({
            $key: null,
            name: '',
            department: '',
            speciality: '',
            degrees: '',
            mobile: '',
            email: '',
            training: '',
            city: ''
        });
    }
}