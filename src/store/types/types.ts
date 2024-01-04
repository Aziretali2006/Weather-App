export interface Weather {
  main: {
    temp:number,
    pressure: number,
    feels_like: number
  },
  wind: {
    speed: number
  }
  name: string
}