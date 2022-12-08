import React, {useContext, useLayoutEffect, useState} from 'react';
import {Circle, KeyPoint, WrapCircle} from "./style";
import cn from "classnames";
import {context} from "../../contex/context";
import TitleTrend from "../TitleTrend";
import {DataItem} from "../../data/data";

const MainCircle = () => {
    const {allData, slide, handleClickKeyPoint} = useContext(context)
    const [allDataLocal, setAllDataLocal] = useState<DataItem[] | null>(null)
    useLayoutEffect(() => {
        if (allData) {
            setAllDataLocal(allData)
        }
    },[])

    return (
    <WrapCircle>
        <Circle rotation = {slide ? (slide -3)*-1 : 1}>
            { handleClickKeyPoint && allDataLocal && allDataLocal.map(item =>
                <KeyPoint
                    onClick={() => handleClickKeyPoint(item.id)}
                    rotation={slide ? (slide -3) : 1 } id={`point${item.id}`}
                    className={cn({["show"]:item.id === slide})}
                    key={item.id}>
                    <div>
                        <span>{item.id}</span>
                    </div>
                </KeyPoint>
            )}

        </Circle>
    <TitleTrend />
    </WrapCircle>
    );
};

export default MainCircle;