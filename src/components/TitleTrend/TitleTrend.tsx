import React, {useContext, useEffect, useRef} from 'react';
import {context} from "../../contex/context";
import {HeaderTrend} from "./style";
import {gsap} from "gsap";


const TitleTrend: React.FC = () => {
    const {slideData} = useContext(context)
    const ref = useRef(null)

    useEffect(() => {
        gsap.fromTo(ref.current, {
            opacity: 0,
        }, {duration: 1, opacity: 1})
    }, [slideData])

    return (
        <HeaderTrend ref={ref}>
            {slideData && slideData.trend}
        </HeaderTrend>
    );
};

export default TitleTrend;