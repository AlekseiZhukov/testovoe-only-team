import React, {useContext, useEffect, useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './custom-swiper-css.css'
import { Navigation } from "swiper";
import {Description, DescriptionTitle, SliderWrapper} from "./style";
import {context} from "../../contex/context";
import {gsap} from 'gsap'
const Slider: React.FC = () => {
    const {slideData} = useContext(context)
    const sliderRef = useRef(null)

    useEffect(() => {

        gsap.fromTo(sliderRef.current, {
            opacity:0,
        }, { duration:1,opacity:1,})

    }, [slideData])
    return (
        <SliderWrapper ref={sliderRef}>
            <Swiper
                navigation
                slidesPerView={3}
                spaceBetween={80}
                modules={[Navigation]}
                grabCursor={true}
            >
                {slideData && slideData.developments.map((item , index) => <SwiperSlide  key={index}>
                    <div>
                        <DescriptionTitle>{item.year}</DescriptionTitle>
                        <Description>{item.description}</Description>
                    </div>

                </SwiperSlide>)}
            </Swiper>
        </SliderWrapper>
    );
};

export default Slider;