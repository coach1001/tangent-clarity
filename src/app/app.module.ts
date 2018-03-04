import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ClarityModule} from '@clr/angular';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppNavComponent } from './components/app-nav/app-nav.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { EmployeeComponent } from './components/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    EmployeesComponent,
    StatisticsComponent,
    LoginComponent,
    LogoutComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
