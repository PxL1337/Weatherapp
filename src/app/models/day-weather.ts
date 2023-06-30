export class DayWeather {
  base?: string;
  coord?: {
    lon: number ,
    lat: number
  } ;
  main?: {
    feels_like: number ,
    humidity: number ,
    pressure: number ,
    temp: number ,
    temp_max: number ,
    temp_min: number ,
  } ;
  weather?: [
    {
      description: string ,
      icon: string ,
      id: number ,
      main: string
    }
  ] ;
  wind?: {
    deg: number ,
    speed: number
  } ;
}
