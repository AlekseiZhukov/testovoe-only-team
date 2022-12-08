import styled from "styled-components";

export const WrapPaginationPoint = styled.div`
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    top: 444px;
    width: 100px;
    margin: 0 auto;
       
    div {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #42567A;
        opacity: .4;
        user-select: none;
             &.active {
              opacity: 1;
            }
    }
    
   
`