import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ai-star',
  templateUrl: 'app/shared/star.component.html',
  styleUrls: ['app/shared/star.component.css']
})
export class StarComponent{
  @Input () rating: number; //Input is used to get the variable rating set to starRating in product-list.component.html
  starWidth: number;
  //Output is used to send an emit with a string to product-list.component.html
  @Output() ratingClicked: EventEmitter<string> =
     new EventEmitter<string>();
//onClick Function to pass an emit with text and current rating
  onClick(){
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }

  ngOnChanges(): void{
    this.starWidth = this.rating * 86/5;
  }
}
