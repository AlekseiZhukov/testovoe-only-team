import styled from 'styled-components';
import {IVector} from './interfaces.styles'
import {theme} from './theme'


export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 1440px;
  height: 1080px;
  
  @media ${theme.media.small} {
      width: 320px;
  }
`;
export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
export const VectorVertical = styled.div<IVector>`
  position: absolute;
  
  left: ${({position}) => position};
  height: 100%;
  width: 1px;
  opacity: .1;
  background: #42567A;
  z-index: -1;
`
export const VectorHorizontal = styled.div`
  position: absolute;
  top: 480px;
  height: 1px;
  width: 100%;
  opacity: 0.1;
  background: #42567A;
  z-index: -1;
`


export const Title = styled.h1`
    position: absolute;
    top: 170px;
    left: 78px;
    width: 400px;
    margin: 0;
    font-weight: 700;
    font-family: PTSans-Bold, sans-serif;
    font-size: 56px;
    line-height: 120%;
    color:  ${theme.colors.font };
        &:before {
          position: absolute;
          top: 9px;
          left: -78px;
          content: "";
          width: 5px;
          height: 120px;
          background: linear-gradient(#3877EE 0%, #3877EE 30%, #EF5DA8 70%, #EF5DA8 100%);
        } 
  @media ${theme.media.small} {
      margin-top: 59px;
      margin-left: 0;
      font-size: 20px;
      width: 123px;
      &:before {
        content: none;
      }
  }
`;



