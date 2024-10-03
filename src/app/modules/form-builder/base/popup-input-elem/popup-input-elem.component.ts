import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popup-input-elem',
  templateUrl: './popup-input-elem.component.html',
  styleUrls: ['./popup-input-elem.component.scss'],
})
export class PopupInputElemComponent {
  @Input() control: any;
  @Input() options: Array<any> = [];
}
