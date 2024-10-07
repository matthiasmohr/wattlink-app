import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lieferstellen-card',
  templateUrl: './card.component.html',
})
export class LieferstellenCardComponent {
  @Input() icon: string = '';
  @Input() badgeColor: string = '';
  @Input() status: string = '';
  @Input() statusColor: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() stromverbrauch: string = '';
  @Input() gasverbrauch: string = '';
  @Input() progress: number = 50;

  constructor() {}
}
