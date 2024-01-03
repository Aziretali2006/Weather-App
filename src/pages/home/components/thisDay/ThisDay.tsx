import React from 'react';
import cls from "./ThisDay.module.scss";
import GlobalSvgSelector from '../../../../assets/icons/global/GlobalSvgSelector';

const ThisDay = () => {
  return (
    <div className={cls.this_day}>
      <section className={cls.top_block}>
        <div className={cls.wrapper}>
          <div className={cls.this_temp}>20°</div>
          <div className={cls.this_day_name}>Сегодня</div>
        </div>
        <GlobalSvgSelector id='sun'/>
      </section>
      <section className={cls.bottom_block}>
        <div className={cls.this_time}>Время:<span>14:51</span></div>
        <div className={cls.this_city}>Город:<span>Санкт-Петербург</span></div>
      </section>
    </div>
  )
}

export default ThisDay