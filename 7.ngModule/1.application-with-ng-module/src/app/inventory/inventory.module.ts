import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order/order.component';
import { FinanceModule } from '../finance/finance.module';



@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    FinanceModule
  ],
  exports:[
    OrderComponent
  ]
})
export class InventoryModule { }
