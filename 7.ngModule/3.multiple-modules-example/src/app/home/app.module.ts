import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AccountsModuleModule } from '../accounts-module/accounts-module.module';
//import { AppComponent } from './app.component';

//import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AccountsModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
