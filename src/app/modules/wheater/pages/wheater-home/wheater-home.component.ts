import { wetherDatas } from './../../../../models/interfaces/wether.interface';
import { Component } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-wheater-home',
  templateUrl: './wheater-home.component.html',
  styleUrls: ['./wheater-home.component.scss']
})
export class WheaterHomeComponent {

  initialName = 'siberia';
  weatherDatas!: wetherDatas;
  searchIcon = faMagnifyingGlass;

  constructor(private wetaherS: WeatherService){}

  ngOnInit(){
    this.getWeather(this.initialName)
  }

  getWeather(cityName:string){
    this.wetaherS.getWeatherdatas(cityName).subscribe({
      next:(response)=>{
        response && (this.weatherDatas = response);
        console.log(response)
      },
      error:(error)=>console.log(error)
    })
    }

    onSubmit():void{
      this.getWeather(this.initialName);
      this.initialName = ''
    }
  }






