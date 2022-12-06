import styled from "styled-components";
import {theme} from "../../styles/theme";

export const WrapControls = styled.div`
padding-left: 80px;
`
export const WrapControlsButton = styled.div`
margin-top: 20px;
display: flex;
flex-flow: row nowrap;
justify-content: space-between;
width: 120px;
`
export const Button = styled.button`
  text-align: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid rgba(66, 86, 122, 0.5);
  font-size: 24px;
  color: #42567A;
  cursor: pointer;
  transition: background-color .3s linear;
  &:hover {
  transition: background-color .3s linear;
    background-color: #fff;
  }
  @media ${theme.media.small} {
      width: 320px;
  }
`;