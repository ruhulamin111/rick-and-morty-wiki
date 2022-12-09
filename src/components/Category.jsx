import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import spiral from '../assets/Spiral.png'
import star from '../assets/Star.png'
import useCast from '../hooks/useCast'
import useEpisode from '../hooks/useEpisode';
import useLocations from '../hooks/useLocations';

const Category = () => {
    const [cast] = useCast(1)
    const [location] = useLocations(1)
    const [episode] = useEpisode(1)
    const navigate = useNavigate()

    return (
        <div style={{ background: `url(${spiral})`, backgroundRepeat: 'no-repeat', objectFit: 'cover' }} >
            <div className='max-w-7xl md:w-10/12 mx-auto h-screen py-5'>
                <div>
                    <div className='flex justify-between items-center'>
                        <h2>Meet the cast</h2>
                        <button onClick={() => navigate('/allCast')}>View all</button>
                    </div>

                    <div className='py-5'>
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={5}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {
                                cast.map((castItem) => <SwiperSlide key={castItem.id}>
                                    <img src={castItem.image} alt="" />
                                    <h2>{castItem.name}</h2>

                                </SwiperSlide>)
                            }
                        </Swiper>
                    </div>
                </div>

                <div style={{ background: `url(${star})`, backgroundRepeat: 'no-repeat', objectFit: 'cover' }} className='py-5'>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={5}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {
                            location.map((locationItem) => <SwiperSlide key={locationItem.id}>
                                <h2>{locationItem.name}</h2>

                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>

                <div style={{ background: `url(${star})`, backgroundRepeat: 'no-repeat', objectFit: 'cover' }} className='py-5'>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={5}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {
                            episode.map((episodeItem) => <SwiperSlide key={episodeItem.id}>
                                <h2>{episodeItem.name}</h2>

                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
            </div>
        </div>

    )
}

export default Category
