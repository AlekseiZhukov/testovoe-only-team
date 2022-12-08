import styled from "styled-components";

interface Circle {
    rotation: number
}

export const WrapCircle = styled.div`
  position: relative;
  width: 530px;
  margin: 0 auto;
`

export const Circle = styled.div<Circle>`
  position: relative;
  margin: 0 auto;
  top: 215px;
  width: 530px;
  height: 530px;
  border: 1px solid rgba(66,86,122,0.1);
  border-radius: 50%;
  transform: rotate(${({rotation}) => rotation * 60}deg);
  transition: transform linear .3s;
  
  #point1,
  #point2,
  #point3,
  #point4,
  #point5,
  #point6 {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    transition: all linear .3s, transform 1ms;
    
        &:hover,
        &.show {
           transition: all linear .3s, transform 1ms;
        }
  }
    
  #point1 {
    top: 262px;
    left: -3px;
    
        &:hover,
        &.show {
           top: 239px;
           left: -26px;
        }
  }
  
  #point2 {
    top: 32px;
    left: 129px;
    
       &:hover,
       &.show {
          top: 9px;
          left: 106px;
       }
  }
  
  #point3 {
    top: 32px;
    left: 391px;
    
        &:hover,
        &.show {
          top: 9px;
          left: 368px;
        }
  }
  
  #point4 {
    top: 262px;
    left: 527px;
    
        &:hover,
        &.show {
          top: 239px;
          left: 504px;
        }
  }
  #point5 {
    top: 489px;
    left: 391px;
    
        &:hover,
        &.show {
          top: 466px;
          left: 368px;
        }
  }
   #point6 {
    top: 489px;
    left: 129px;
    
        &:hover,
        &.show {
          top: 466px;
          left: 106px;
        }
  }
`;
export const KeyPoint = styled.div<Circle>`
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #42567A;
  overflow: hidden;
  z-index: 10;
  cursor: pointer;
  transform: rotate(${({rotation}) => rotation * 60}deg);
  font-size: 20px;
  
  &:hover,
  &.show {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
      width: 56px;
      height: 56px;
      background: #F4F5F9;
      border: 1px solid rgba(48, 62, 88, 0.5);
  }
`