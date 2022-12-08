import React, {useEffect, useLayoutEffect, useState} from 'react';
import GlobalStyle from './styles/global.styles'
import {
    Container,
    Title,
    VectorHorizontal,
    VectorVertical, Wrapper,
} from './styles/components.styles'
import Slider from "./components/Slider";
import {ContextProvider} from "./contex/context";
import BigDates from "./components/Dates";
import MainCircle from "./components/MainCircle";
import ControlsButtons from "./components/ContrlosButtons";
import SliderMobile from "./components/SliderMobile";
import TitleTrend from "./components/TitleTrend";
import PaginationMobile from "./components/PaginationMobile";


const App = () => {

    const width = window.innerWidth
    const [mobile, setMobile] = useState<boolean>(false);

    const resizeScreen = () => {
        if (window.innerWidth <= 540) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }

    useLayoutEffect(() => {
        if (width <= 540) {
            setMobile(true);
        }
    }, []);

    useEffect(() => {
        window.addEventListener("resize", resizeScreen);
        return () => {
            window.removeEventListener("resize", resizeScreen);
        };
    }, []);

    return (
        <Container>
            <VectorVertical/>
            <VectorVertical position="50%"/>
            <VectorVertical position="100%"/>
            <VectorHorizontal/>
            <Title>Исторические даты</Title>
            <Wrapper>
                <ContextProvider>
                    {!mobile ? <MainCircle/> : <PaginationMobile/>}
                    <BigDates/>
                    {mobile && <TitleTrend/>}
                    <ControlsButtons/>
                    {mobile ? <SliderMobile/> : <Slider/>}
                </ContextProvider>
            </Wrapper>
            <GlobalStyle/>
        </Container>
    );
};

export default App;
