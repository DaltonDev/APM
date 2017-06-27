//import keyword {Member name} from Angular library module name
import { Component } from '@angular/core';


//Component metadata
//Decorators (@) adds metadata to a class or its method arguments
@Component({
    selector: 'pm-app', //Directive name used in HTML <pm-app></pm-app>
    template: `         <!--template is the layout for the view-->
        <div><h1>{{pageTitle}}</h1> <!--double {{ }} to bind name from class below-->
          <pm-products></pm-products>
        </div>
    `
})
//First simple class that has a name (pageTitle) and a strong type (string)
export class AppComponent {
  pageTitle: string = "Acme Product Management";
 }
