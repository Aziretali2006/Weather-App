
import React, { ReactNode } from 'react';
import { ThemeContext } from '../context/ThemeContext';

interface Props {
  children: ReactNode;
}

const ThemeProvider = ({children , ...props}: Props) => {
  const [theme , setTheme] = React.useState<string>("light");

  function changeTheme(theme:string) {
    setTheme(theme)
  }

  return (
    <ThemeContext.Provider 
      value={{theme, changeTheme}}
      {...props}
      >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
