import cls from "./ThisDayInfo.module.scss";
import cloud from "../../../../assets/images/Cloud image.png";
import ThisDayItem from './ThisDayItem';
import { Weather } from "../../../../store/types/types";

export interface Item {
  icon_id: string;
  name: string
  value: string
}

interface Props {
  weather: Weather
}

const ThisDayInfo = ({weather}: Props) => {

  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: `${Math.floor(weather.main.temp)}° - ощущается как ${Math.floor(weather.main.feels_like)}°`
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: `${weather.main.pressure} мм ртутного столба - нормальное`
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: "Без осадков"
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: `${weather.wind.speed} м/с юго-запад - легкий ветер`
    },
  ]

  return (
    <div className={cls.this_day_info}>
      <div className={cls.this_day_info_items}>
        {
          items.map((item: Item) => (
            <ThisDayItem weather={weather} key={item.icon_id} item={item}/>
          ))
        }
      </div>
      <img className={cls.cloud_img} src={cloud} alt="облако" />
    </div>
  )
}

export default ThisDayInfo