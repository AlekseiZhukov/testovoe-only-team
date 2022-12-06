import {createGlobalStyle} from "styled-components";
import BebasNeueRegular from '../assets/fonts/BebasNeueRegular.ttf'
import PTSansBold from '../assets/fonts/PTSansBold.ttf'
import PTSansBRegular from '../assets/fonts/PTSansRegular.ttf'

export default createGlobalStyle`

    @font-face {
        font-family: 'BebasNeue-Regular';
        src: url(${BebasNeueRegular}) format('truetype');
        font-display: fallback;
    }
    @font-face {
        font-family: 'PTSans-Regular';
        src: url(${PTSansBRegular}) format('truetype');
        font-display: fallback;
    }
    @font-face {
        font-family: 'PTSans-Bold';
        src: url(${PTSansBold}) format('truetype');
        font-display: fallback;
    }
    
    
    
    * {
      box-sizing: border-box;
    }
    
    html {
    
    }
    body {
      margin: 0;
      padding: 0;
      background: #F4F5F9;
      font-family: 'PTSans-Regular', sans-serif;
      font-size: 14px;
      line-height: 18px;
      color: #42567A;
     
    }
`