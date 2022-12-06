import styled from 'styled-components';
import {theme} from "../../styles/theme";
export const SliderWrapper = styled.div`
  width: 90%;
  margin: 56px auto 104px;
  overflow: hidden;
  padding:  0 50px 0 60px;
  z-index: 1;
`
export const DescriptionTitle = styled.div`
  font-family: BebasNeue-Regular, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 120%;
  color: #3877EE;
`
export const Description = styled.p`
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 30px;
color: ${theme.colors.font }
`
