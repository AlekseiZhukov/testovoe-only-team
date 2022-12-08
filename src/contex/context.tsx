import React, {useEffect, useState} from 'react'
import {DATA, DataItem} from "../data/data"

type Props = {
    children: React.ReactNode;
};

interface Context {
    allData: DataItem[] | null
    slide: number | null
    slideData: DataItem | null
    handleClickRight: (() => void) | null
    handleClickLeft: (() => void) | null
    handleClickKeyPoint: ((value: number) => void) | null
}

export const context = React.createContext<Context>({
    allData: null,
    slide: null,
    slideData: null,
    handleClickRight: null,
    handleClickLeft: null,
    handleClickKeyPoint: null
})

export const ContextProvider = ({children}: Props): JSX.Element => {
    const [allData, setAllData] = useState<DataItem[]>(DATA)
    const [slide, setSlide] = useState<number>(2)
    const [slideData, setSlideData] = useState<DataItem>(DATA.filter(item => item.id === slide)[0])

    const handleClickRight = () => {
        if (slide < 6) {
            setSlide(prevState => prevState + 1)
        } else if (slide === 6) {
            setSlide(1)
        }
    }

    const handleClickLeft = () => {
        if (slide <= 6 && slide > 1) {
            setSlide(prevState => prevState - 1)
        } else if (slide === 1) {
            setSlide(6)
        }
    }

    const handleClickKeyPoint = (value: number) => {
        setSlide(value)
    }

    useEffect(() => {
        setSlideData(allData.filter(item => item.id === slide)[0])
    }, [slide, allData])

    return <context.Provider value={{
        allData, slide, slideData, handleClickRight, handleClickLeft, handleClickKeyPoint,
    }}>
        {children}
    </context.Provider>
};