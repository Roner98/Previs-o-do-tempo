import { Component, Input } from '@angular/core';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { wetherDatas } from 'src/app/models/interfaces/wether.interface';


@Component({
  selector: 'app-wether-card',
  templateUrl: './wether-card.component.html',
  styleUrls: ['./wether-card.component.scss']
})
export class WetherCardComponent {

  @Input() wetherDatasInput!: wetherDatas;

  //dados da previsão do tempo recebidos pelo componente pai

  minTemperatureIcon = faTemperatureLow;
  maxTemperatureLow = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind

}
