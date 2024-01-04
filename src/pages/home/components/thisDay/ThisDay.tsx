import React from 'react';
import cls from "./ThisDay.module.scss";
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector';
import { Weather } from '../../../../store/types/types';

interface Props {
  weather: Weather
}

const ThisDay = ({weather}: Props) => {
  return (
    <div className={cls.this_day}>
      <section className={cls.top_block}>
        <div className={cls.wrapper}>
          <div className={cls.this_temp}>{Math.floor(weather.main.temp)}°</div>
          <div className={cls.this_day_name}>Сегодня</div>
        </div>
        <GlobalSvgSelector id='rain'/>
      </section>
      <section className={cls.bottom_block}>
        <div className={cls.this_time}>Время: <span>14:51</span></div>
        <div className={cls.this_city}>Город: <span>{weather.name}</span></div>
      </section>
    </div>
  )
}

export default ThisDay