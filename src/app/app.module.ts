import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './users/user.service';


// Create the routes array which is of the type: Routes.
const routes: Routes = [
  { 
    path: 'users', 
    component: UsersComponent, 
  },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  // Exporting RouterModule makes router directives available for use in the components AppModule that will need them.
  exports: [
    RouterModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
