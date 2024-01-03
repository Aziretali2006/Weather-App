import React from 'react';
import cls from "./Days.module.scss";

const Tabs = () => {

  const Tabs = [
    {
      value: "На неделю"
    },
    {
      value: "На 10 дней"
    },
    {
      value: "На месяц"
    },
  ]

  return (
    <div className={cls.tabs}>
      <div className={cls.tabs_wrapper}>
        {
          Tabs.map(tab => (
            <div className={cls.tab} key={tab.value}>
              {tab.value}
            </div>
          ))
        }
      </div>
      <div className={cls.cancel}>Отменить</div>
    </div>
  )
}

export default Tabs
