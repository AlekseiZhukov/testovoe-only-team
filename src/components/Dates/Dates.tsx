import React, {useContext, useEffect, useState} from 'react';
import {WrapperDates, Dates} from "./style";
import {context} from "../../contex/context";
import CountUp from 'react-countup';

const BigDates: React.FC = () => {
    const {slideData} = useContext(context)
    const [year, setYear] = useState<number[]>([1987, 1991])
    useEffect(() => {
        if (slideData) {
            setTimeout(() => setYear([slideData?.years[0], slideData.years[1]]), 500)
        }
    }, [slideData])
    return (
        <WrapperDates>
            <Dates color="iris">
                <CountUp
                    start={year[0]}
                    end={slideData ? slideData.years[0] : year[0]}
                    duration={1}
                />

            </Dates>
            <Dates color="fuschia">
                <CountUp
                    start={year[1]}
                    end={slideData ? slideData.years[1] : year[1]}
                    duration={1}
                />
            </Dates>
        </WrapperDates>
    );
};

export default BigDates;