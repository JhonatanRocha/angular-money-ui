import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-intera-message',
  templateUrl: './intera-message.component.html',
  styleUrls: ['./intera-message.component.css']
})
export class InteraMessageComponent {

  @Input() error: string;
  @Input() control: FormControl;
  @Input() message: string;

  temErro(): boolean {
    return this.control.hasError(this.error) &&
      this.control.dirty;
  }
}
