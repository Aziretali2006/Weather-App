import cls from "./Header.module.scss";
import GlobalSvgSelector from '../../assets/icons/global/GlobalSvgSelector';
import Select, { StylesConfig } from "react-select";
import React from "react";
import { useTheme } from "../../hooks/useTheme";
import { changeCssRootVariables } from "../../model/ChangeCssRootVarianles";
import { Theme } from "../../context/ThemeContext";

const Header = () => {
  const themeObj = useTheme();

  const options = [
    { value: 'city-1', label: 'Санкт-Петерберг' },
    { value: 'city-2', label: 'Москва' },
    { value: 'city-3', label: 'Новгород' }
  ];

  const colourStyles: StylesConfig = {
    control: (styles) => ({
      ...styles, 
      backgroundColor: themeObj.theme === Theme.DARK ? "#4f4f4f" : "rgba(71, 147 , 255, 0.2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: "100px"
    }),
    singleValue: (styles) => ({
      ...styles,
      color: themeObj.theme === Theme.DARK ? "#fff" : "#000"
    })
  }

  const changeTheme = () => {
    themeObj.changeTheme(themeObj.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }

  return (
    <header className={cls.header}>
      <div className={cls.wrapper}>
        <div className={cls.logo}>
          <GlobalSvgSelector id='header-logo'/>
        </div>
        <div className={cls.title}>React weather</div>
      </div>
      <div className={cls.wrapper}>
        <div className={cls.change_theme}  onClick={changeTheme}>
          <GlobalSvgSelector id='change-theme'/>
        </div>
        <Select  
          defaultValue={options[0]} 
          styles={colourStyles} 
          options={options} 
        />
      </div>
    </header>
  )
}

export default Header;