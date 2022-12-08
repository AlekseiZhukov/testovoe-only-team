import React, {useContext, useEffect, useRef} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Description, DescriptionTitle, SliderWrapperMobile} from "./style";
import {context} from "../../contex/context";
import {gsap} from 'gsap'
import 'swiper/css';
import 'swiper/css/navigation';
import './custom-swiper-rmobile.css'

const SliderMobile: React.FC = () => {
    const {slideData} = useContext(context)
    const sliderRef = useRef(null)

    useEffect(() => {
        gsap.fromTo(sliderRef.current, {
            opacity: 0,
        }, {duration: 1, opacity: 1,})
    }, [slideData])

    return (
        <SliderWrapperMobile ref={sliderRef}>
            <Swiper
                slidesPerView={2}
                spaceBetween={25}
                grabCursor={true}
            >
                {slideData && slideData.developments.map((item, index) => <SwiperSlide key={index}>
                    <div>
                        <DescriptionTitle>{item.year}</DescriptionTitle>
                        <Description>{item.description}</Description>
                    </div>

                </SwiperSlide>)}
            </Swiper>
        </SliderWrapperMobile>
    );
};

export default SliderMobile;