import React from 'react';
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
import TitleTrend from "./components/TitleTrend";


const App = () => {
    console.log("render APP")

  return (
    <Container>
        <VectorVertical/>
        <VectorVertical position="50%"/>
        <VectorVertical position="100%"/>
        <VectorHorizontal />
        <Title>Исторические даты</Title>
        <Wrapper>
            <ContextProvider>
                <React.StrictMode>
                <MainCircle />
                </React.StrictMode>

                <BigDates />
                <ControlsButtons />
                <Slider />
            </ContextProvider>
        </Wrapper>
        <GlobalStyle />
    </Container>
  );
};

export default App;
