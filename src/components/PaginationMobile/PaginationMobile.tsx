import React, {useContext} from 'react';
import {context} from "../../contex/context";
import {WrapPaginationPoint} from "./style";
import cn from "classnames";

const PaginationMobile = () => {
    const {allData, slide, handleClickKeyPoint} = useContext(context)
    return (
        <WrapPaginationPoint>
            {allData && handleClickKeyPoint && allData.map(item => (
                <div  key={item.id}

                      onClick={() => handleClickKeyPoint(item.id)}
                      className={cn({["active"]:item.id === slide})}
                />
            ))}
        </WrapPaginationPoint>
    );
};

export default PaginationMobile;