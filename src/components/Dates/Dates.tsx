import React, {useContext, useRef} from 'react';
import {WrapperDates, Dates} from "./style";
import {context} from "../../contex/context";

const BigDates:React.FC = () => {
    const {slideData} = useContext(context)
    const data1 = useRef(null)

    return (
        <WrapperDates >
            <Dates color="iris" ref={data1}>{slideData && slideData.years[0]}</Dates>
            <Dates color="fuschia" >{slideData && slideData.years[1]}</Dates>
        </WrapperDates>
    );
};

export default BigDates;