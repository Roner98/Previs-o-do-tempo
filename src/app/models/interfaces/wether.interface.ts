export interface wetherDatas{
  coord:{
    lat:number
    lon: number
  },
  dt:number,
  main:{
    temp:number,
    humidity:number,
    fells_like:number,
    temp_min: number,
    temp_max: number,
    pressure:number,
  },
  name:string;
  sys:{
    type:number;
    id:number;
    country:string;
    sunrise:number;
    sunset:number;
  },
  timezone: number;
  visibility:number;
  weather:[
    {
    id:number;
    main:string;
    description:string;
    icon:number;
  }
],
  wind:{
    speed:number;
    deg:number;
  }
}
