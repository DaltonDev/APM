import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()
export class ProductDetailGuard implements CanActivate{
//Create a new router instance with the name "_router"
  constructor(private _router: Router){

  }

  canActivate(route: ActivatedRouteSnapshot): boolean{
    //get the index of the second item in url for example /product/1
    //the [1] means that we want to get the ID (second item)
    //The + means that we convert it to a number
    let id = +route.url[1].path;
    if(isNaN(id) || id < 1){
      alert('Invalid product Id');
      //Start a new navigation to redirect back to list page
      this._router.navigate(['/products']);
      //Abort current navigation
      return false;
    };
    return true;
  }
}
