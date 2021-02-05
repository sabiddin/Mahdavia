import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //Use this for the child component communication example.
  //@Input() usersFromHomeComponent: any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  registerForm: FormGroup;
  constructor(private accountService: AccountService, private toastr: ToastrService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm() {
    // this.registerForm = new FormGroup({
    //   username: new FormControl('', Validators.required),
    //   password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
    //   confirmPassword: new FormControl('', [Validators.required, this.matchValues('password')])
    // });
    //Using FormBuilder Service we don need to do the new FormControl, instead we pass the fields in square
    //backets as an array. It doesn't do much but it simplifies our code a little bit.
    this.registerForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
        confirmPassword: ['', [Validators.required, this.matchValues('password')]]
    });
  }
  matchValues(matchTo: string): ValidatorFn {
    return (control: AbstractControl) => {
      return control?.value === control?.parent?.controls[matchTo].value
        ? null : { isMatching: true };
    }
  }
  register() {
    // this.accountService.register(this.model).subscribe( response => {
    //   console.log(response);
    //   this.cancel();
    //   this.toastr.success('Registration successfully', 'Success');
    // }, error => {
    //   console.log(error);
    //   this.toastr.error(error, 'Error');
    // });
    // console.log(this.model);
    this.registerForm.value;
  }

  cancel() {
    this.cancelRegister.emit(false);
  }
}
