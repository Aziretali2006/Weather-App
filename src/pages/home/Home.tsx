import React from 'react';
import cls from "./Home.module.scss";
import ThisDay from './components/thisDay/ThisDay';
import ThisDayInfo from './components/thisDayInfo/ThisDayInfo';
import Days from './components/days/Days';

const Home = () => {
  return (
    <div className={cls.home}>
      <div className={cls.wrapper}>
        <ThisDay />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  )
}

export default Home
