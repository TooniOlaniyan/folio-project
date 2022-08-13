import GlobalStyles from './components/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { useScroll , motion } from 'framer-motion'
import './index.css'
import {original , invert } from './components/ThemeStyle'
import Home from './pages/Home'
import React , {useState} from 'react'
import styled from 'styled-components'


export const ThemeContext = React.createContext()
const themes = {
  original,
  invert,
}
function App() {
  const { scrollYProgress } = useScroll()
  const [theme, setTheme] = useState('original')
  return (
    <>
    <Line>
      <motion.div style={{scaleY: scrollYProgress}}  className='scrollY'></motion.div>
    </Line>
      <GlobalStyles />
      <ThemeProvider theme={themes[theme]}>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <Home />
        </ThemeContext.Provider>
      </ThemeProvider>
    </>
  )
}
  const Line = styled.div`
    .scrollY {
      position: fixed;

      top: -30rem;
      left: 2rem;
      bottom: 0;
      width: 0.1px;
      background: #4e9f3d;
      transform-origin: 0%;
      @media screen and (max-width: 640px) {
        display: none;
      }
    }
  `

export default App;
