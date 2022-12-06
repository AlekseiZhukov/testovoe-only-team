import React, {useContext} from 'react';
import {Circle, KeyPoint} from "./style";
import cn from "classnames";
import {context} from "../../contex/context";

const MainCircle = () => {
    const {allData, slide, handleClickKeyPoint} = useContext(context)
    return (

        <Circle rotation = {slide ? (slide -3)*-1 : 1}>
            { handleClickKeyPoint && allData && allData.map(item => <KeyPoint  onClick={() => handleClickKeyPoint(item.id)} rotation={slide ? (slide -3) : 1 } id={`point${item.id}`}  className={cn({["show"]:item.id === slide})} key={item.id}><div><span>{item.id}</span></div></KeyPoint>)}
            {}
        </Circle>
    );
};

export default MainCircle;