/**
 * New typescript file
 */
import { Component } from '@angular/core';
@Component({
  //important to add if you want to bring in urls
  moduleId: module.id,
  selector: 'my-app',
   template: 
   `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
    `,
   styleUrls: ['./app.component.css'],
})


export class AppComponent{
  title = 'Tour of Heroes';
}
