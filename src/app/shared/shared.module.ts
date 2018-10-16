import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteraMessageComponent } from './intera-message/intera-message.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InteraMessageComponent],
  exports: [InteraMessageComponent]
})
export class SharedModule { }
