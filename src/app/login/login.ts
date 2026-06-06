import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
    email = '';
  password = '';

  login() {
    console.log('Email:', this.email);
    console.log('Password:', this.password);

    // Call API here
  }

}
