import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  auth() {
    this.submitted = !this.submitted;
    setTimeout(() => {
      this.submitted = !this.submitted;
    }, 3000)
  }
}
