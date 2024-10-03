import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popup-check-elem',
  templateUrl: './popup-check-elem.component.html',
  styleUrls: ['./popup-check-elem.component.scss'],
})
export class PopupCheckElemComponent {
  @Input() control: any;
  @Input() options: Array<any> = [];
}
