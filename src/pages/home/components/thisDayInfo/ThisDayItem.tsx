import React from 'react'
import { Item } from './ThisDayInfo';
import cls from "./ThisDayInfo.module.scss"
import IndicatorSvgSelector from '../../../../assets/icons/indicators/IndicatorSvgSelector';
import { Weather } from '../../../../store/types/types';

interface Props {
  item: Item,
  weather: Weather
}

const ThisDayItem = ({item}: Props) => {
  const {icon_id , value , name} = item;

  return (
    <div className={cls.item}>
      <div className={cls.indicator}>
        <IndicatorSvgSelector id={icon_id}/>
      </div>
      <div className={cls.indicator_name}>
        {name}
      </div>
      <div className={cls.indicator_value}>
        {value}
      </div>
    </div>
  )
}

export default ThisDayItem
