//import keyword {Member name} from Angular library module name
import { Component } from '@angular/core';
//Import the service

//Component metadata
//Decorators (@) adds metadata to a class or its method arguments
@Component({
    selector: 'pm-app', //Directive name used in HTML <pm-app></pm-app>
    template: `         <!--template is the layout for the view-->
    <div>
      <nav class='navbar navbar-default'>
        <div class='container-fluid'>
          <a class="navbar-brand">{{pageTitle}}</a>
          <ul class="nav navbar-nav">
            <li><a [routerLink]="['/welcome']">Home</a></li>
            <li><a [routerLink]="['/products']">Product List</a></li>
          </ul>
        </div>
      </nav>
      <div class="container">
        <router-outlet></router-outlet>
      </div>
    </div>
    `
})
//First simple class that has a name (pageTitle) and a strong type (string)
export class AppComponent {
  pageTitle: string = "Acme Product Management";
 }
