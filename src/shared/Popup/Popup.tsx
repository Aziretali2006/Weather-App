import React from 'react';
import cls from "./Popup.module.scss";
import { Item } from '../../pages/home/components/thisDayInfo/ThisDayInfo';
import ThisDayItem from '../../pages/home/components/thisDayInfo/ThisDayItem';
import { IoIosCloseCircleOutline } from "react-icons/io"
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';

const Popup = () => {

  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: "20° - ощущается как 17°"
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: "765 мм ртутного столба - нормальное"
    },
    {
      icon_id: "precipitation",
      name: "Осадки",
      value: "Без осадков"
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: "3 м/с юго-запад - легкий ветер"
    },
  ]


  return (
    <React.Fragment>
      <div className={cls.blur}></div>
      <div className={cls.popup}>
        <div className={cls.day}>
          <div className={cls.day_temp}>20°</div>
          <div className={cls.day_name}>Среда</div>
          <div className={cls.img}>
            <GlobalSvgSelector id='sun'/>
          </div>
          <div className={cls.day_time}>Время:<span>14:51</span></div>
          <div className={cls.day_city}>Город:<span>Санкт-Петербург</span></div>
        </div>
        <div className={cls.this_day_info_items}>
          {
            items.map((item: Item) => (
              <ThisDayItem key={item.icon_id} item={item}/>
            ))
          }
        </div>
        <div className={cls.close}>
          <IoIosCloseCircleOutline />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Popup;
