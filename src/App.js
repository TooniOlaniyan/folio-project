import GlobalStyles from './components/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { useScroll , motion } from 'framer-motion'
import './index.css'
import {original , invert } from './components/ThemeStyle'
import Home from './pages/Home'
import React , {useState} from 'react'
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


export const ThemeContext = React.createContext()
const themes = {
  original,
  invert,
}
function App() {
  const { scrollYProgress  , scrollY} = useScroll()
  const [theme, setTheme] = useState('original')
  return (
    <>
    <ToastContainer/>
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

      top: -45rem;
      left: 2rem;
      bottom: 0;
      width: 0.1px;
      background: #fff;
      transform-origin: 0%;
      @media screen and (max-width: 640px) {
        display: none;
      }
      @media screen and (max-width: 1024px) {
        display: none;
      
      }
    }
  `

export default App;
