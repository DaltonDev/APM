import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ProductListComponent } from './products/product-list.component';

//Add stuff here that we want to use. See ProductListComponent for example
@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ProductListComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
