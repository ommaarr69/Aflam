import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    last_name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][A-Za-z0-9]{8,16}$/)]),
    age: new FormControl(null, [Validators.required, Validators.min(16), Validators.max(60)]),
  });
  errorMessage: string = '';
  constructor(private _AuthService: AuthService, private _Router: Router) { }



  ngOnInit(): void {
  }
  submitData(formData: FormGroup) {
    console.log(formData);
    this._AuthService.register(formData.value).subscribe(
      (res) => {
        console.log(res);
        if (res.message == "success") {
          this._Router.navigate(['/Login'])
        }
        else {
          this.errorMessage = res.message;
        }
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log("done");
      }
    )
  }
}
