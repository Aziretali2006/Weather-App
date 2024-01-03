import React from 'react';
import cls from "./Days.module.scss";
import { Day } from './Days';
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector';

interface Props {
  day: Day
}

const Card = ({day}: Props) => {
  return (
    <div className={cls.card}>
      <div className={cls.day}>{day.day}</div>
      <div className={cls.day_info}>{day.day_info}</div>
      <div className={cls.img}>
        <GlobalSvgSelector id={day.icon_id}/>
      </div>
      <div className={cls.temp_day}>{day.temp_day}</div>
      <div className={cls.temp_night}>{day.temp_night}</div>
      <div className={cls.info}>{day.info}</div>
    </div>
  )
}

export default Card
