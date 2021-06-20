import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'imf-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  account = {
    name: '',
    email: '',
    password: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {}

}
