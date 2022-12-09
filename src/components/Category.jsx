import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import spiral from '../assets/Spiral.png'
import useCast from '../hooks/useCast'

const Category = () => {
    const [cast] = useCast(1)
    console.log(cast)

    return (
        <div style={{ background: `url(${spiral})`, backgroundRepeat: 'no-repeat', objectFit: 'cover' }} >
            <div className='max-w-7xl md:w-10/12 mx-auto h-screen py-5'>
                <div>
                    <div className='flex justify-between items-center'>
                        <h2>Meet the cast</h2>
                        <button>View all</button>
                    </div>
                    <div className='py-5'>
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={5}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {
                                cast.map((castItem) => <SwiperSlide key={castItem.id}>
                                    <h2>{castItem.name}</h2>
                                </SwiperSlide>)
                            }

                        </Swiper>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>

    )
}

export default Category
