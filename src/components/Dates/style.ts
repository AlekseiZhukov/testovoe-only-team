import styled from "styled-components";
import {theme} from "../../styles/theme";
import {IDates} from "../../styles/interfaces.styles";

export const WrapperDates = styled.div`
    position: relative;
    top: -132px;
    margin: 0 auto;
    width: 973px;
    display: flex;
    justify-content:space-between ;
    text-align: center;
    z-index: -1;
    @media ${theme.media.small} {
    width: 273px;
    margin: 56px auto 57px;
   }
`
export const Dates = styled.span<IDates>`
  font-family: PTSans-Bold, sans-serif;
  font-size: 200px;
  font-weight: 700;
  line-height: 160px;
  text-align: center;
  letter-spacing: -0.02em;
  color: ${({color}) => theme.colors[color]};
   @media ${theme.media.small} {
    font-size: 56px;
   }
`;
