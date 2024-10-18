import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lieferstellen-card',
  templateUrl: './card.component.html',
})
export class LieferstellenCardComponent {
  @Input() icon: string = '';
  @Input() melo: string = '';
  @Input() plz: string = '';
  @Input() stadt: string = '';
  @Input() strasse: string = '';
  @Input() hausnummer: string = '';
  @Input() jahresverbrauch_kWh: string = '';
  @Input() spitzenlast_kW: string = '';
  @Input() profil: string = '';
  @Input() fortschritt: number = 0;
  @Input() status: string = '';
  @Input() farbe: string = '';

  constructor() {}
}
