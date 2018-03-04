import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})

export class AppNavComponent implements OnInit {
  navItems:Array<any>;
  authenticated:boolean = false;

  constructor(private router:Router) { }

  ngOnInit() {
    this.navItems = [
      { pos: 'left', route: 'employees', label: 'Employees', reqAuth: false },
      { pos: 'left', route: 'statistics', label: 'Statistics', reqAuth: false },
      { pos: 'left', route: 'employees/me', label: 'My Profile', reqAuth: true },
      { pos: 'right', func: 'logout', label: 'Log Out', reqAuth: true },
      { pos: 'right', route: 'login', label: 'Log In', reqAuth: false }
    ];

  }
}
