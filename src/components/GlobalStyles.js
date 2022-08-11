import {createGlobalStyle} from 'styled-components'


const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body{
    /* overflow: hidden; */
    background-color: #f2e5d7;
}
a{
    text-decoration: none;
}
li{
    text-decoration: none;
    list-style: none;
}
h1 h2 h3 h4 h4 h6{
    margin: 0;
    padding: 0;
}

`

export default GlobalStyles