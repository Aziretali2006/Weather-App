import React from 'react';
import cls from "./Home.module.scss";
import ThisDay from './components/thisDay/ThisDay';
import ThisDayInfo from './components/thisDayInfo/ThisDayInfo';
import Days from './components/days/Days';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather';

const Home = () => {
  const dispatch = useAppDispatch();

  const { weather } = useAppSelector(state => state.currentWeatherSlice)

  React.useEffect(() => {
    dispatch(fetchCurrentWeather("bishkek"))
  },[])

  return (
    <div className={cls.home}>
      <div className={cls.wrapper}>
        <ThisDay weather={weather}/>
        <ThisDayInfo weather={weather}/>
      </div>
      <Days />
    </div>
  )
}

export default Home
