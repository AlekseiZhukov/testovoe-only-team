import styled from "styled-components";
import {theme} from "../../styles/theme";


export const HeaderTrend = styled.h2`
    position: absolute;
    top: 238px;
    right: -15px;
    width: 100px;
    margin: 0;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #42567A;
    
    @media ${theme.media.small} {
    width: 273px;
    margin: 56px auto 57px;
   }
`

