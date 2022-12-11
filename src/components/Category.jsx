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
            <div className='max-w-7xl md:w-10/12 mx-auto h-screen py-10'>
                <div>
                    {/* title sector  */}
                    <div className='flex justify-between items-center'>
                        <h2 className='text-2xl font-bold text-[#59fa93]'>Meet the cast</h2>
                        <button className='border py-1 px-3 hover:bg-[#59fa93] hover:text-black text-[#59fa93]' onClick={() => navigate('/allCast')}>View all</button>
                    </div>
                    {/* character item  */}
                    <div className='py-2'>
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={5}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {
                                cast.map((castItem) => <SwiperSlide className='border p-2 rounded-md rounded-br-3xl' key={castItem.id}>
                                    <img className='rounded-md mb-4' src={castItem.image} alt="" />
                                    <h2 className='text-lg font-bold'>{castItem.name}</h2>
                                </SwiperSlide>)
                            }
                        </Swiper>
                    </div>
                </div>
                {/* location item  */}
                <div style={{ background: `url(${star})`, backgroundRepeat: 'no-repeat', objectFit: 'cover' }} className='py-2'>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={5}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {
                            location.map((locationItem) => <SwiperSlide className='border px-2 py-4 rounded-md rounded-br-2xl' key={locationItem.id}>
                                <h2>{locationItem.name}</h2>
                            </SwiperSlide>)
                        }
                    </Swiper>
                </div>
                {/* episode item  */}
                <div style={{ background: `url(${star})`, backgroundRepeat: 'no-repeat', objectFit: 'cover' }} className='py-2'>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={5}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {
                            episode.map((episodeItem) => <SwiperSlide className='border px-2 py-4 rounded-md rounded-br-2xl' key={episodeItem.id}>
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
