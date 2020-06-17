import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  Signupform:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.Signupform=this.fb.group({
      'FirstName':[null, Validators.required],
      'LastName':[null, Validators.required],
      'email':[null, [Validators.required, Validators.email]],
      'password':[null, Validators.required],


    });
  }
  Signup(formData:NgForm){
    console.log(formData);
  }

}