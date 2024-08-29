import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpeningComponent } from './opening/opening.component';
import { JournalsComponent } from './journals/journals.component';

@NgModule({
  declarations: [
    OpeningComponent,
    JournalsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[OpeningComponent,JournalsComponent]
})
export class AccountsModule { }
