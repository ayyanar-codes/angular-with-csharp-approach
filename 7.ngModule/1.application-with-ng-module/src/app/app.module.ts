import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InventoryModule } from './inventory/inventory.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InventoryModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
