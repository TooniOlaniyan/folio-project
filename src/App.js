import GlobalStyles from './components/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import './index.css'
import {original , invert } from './components/ThemeStyle'
import Home from './pages/Home'
import React , {useState} from 'react'


export const ThemeContext = React.createContext()
const themes = {
  original,
  invert,
}
function App() {
  const [theme, setTheme] = useState('original')
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={themes[theme]}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <Home />
        </ThemeContext.Provider>
      </ThemeProvider>
    </>
  )
}

export default App;
