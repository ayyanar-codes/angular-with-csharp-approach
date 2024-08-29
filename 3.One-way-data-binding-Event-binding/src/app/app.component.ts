import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopping cart';
  totalItems:number=0;

  selectedItems:string='';

  addToCart(){
    alert(`${this.selectedItems} is added to cart!`);
  }
}
