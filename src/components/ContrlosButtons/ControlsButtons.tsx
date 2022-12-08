import React, {useContext} from 'react';
import {context} from "../../contex/context";
import {Button, WrapControls, WrapControlsButton} from './style'

const ControlsButtons = () => {
    const {slide, allData, handleClickLeft, handleClickRight} = useContext(context)
    const onHandleClickLeft = () => {
        handleClickLeft && handleClickLeft()
    }
    const onHandleClickRight = () => {
        handleClickRight && handleClickRight()
    }

    return (
        <WrapControls>
            <div>{`0${slide}/0${allData && allData.length}`}</div>
            <WrapControlsButton>
                <Button onClick={onHandleClickLeft}>&#60;</Button>
                <Button onClick={onHandleClickRight}>&#62;</Button>
            </WrapControlsButton>
        </WrapControls>
    );
};

export default ControlsButtons;