import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  // TODO apenas simulando request a API
  login (user: any) {
    return new Promise( (resolve) => {
      window.localStorage.setItem('token', 'medicar-token')
      resolve(true)
    })
  }

  // TODO apenas simulando request a API
  signup (account: any) {
    return new Promise( (resolve) => {
      resolve(true)
    })
  }
}
