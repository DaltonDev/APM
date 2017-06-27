import { PipeTransform, Pipe } from '@angular/core';
import { IProduct } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform{
  transform(value: IProduct[], filterBy: string): IProduct[]{
    //filterBy string in lowercase or null of no filter string is written
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    //If filter is not null return a filtered list according to input string or
    //a return of just the input if there is nothing matching in the array
    return filterBy ? value.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }
}
