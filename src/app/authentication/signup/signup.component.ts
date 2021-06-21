import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/shared/account.service';

@Component({
  selector: 'imf-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  account = {
    username: '',
    email: '',
    password: ''
  }

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    try {
      const result = await this.accountService.signup(this.account)

      console.log(result)
    } catch (error) {
      console.error(error)
    }
  }

}
