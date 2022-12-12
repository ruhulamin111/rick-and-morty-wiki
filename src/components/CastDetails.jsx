import React from 'react'
import { useParams } from 'react-router-dom'
import useCastDetails from '../hooks/useCastDetails'

const CastDetails = () => {
    const { id } = useParams()
    const [name, image, status, species, gender, location, origin] = useCastDetails(id)
    console.log('first')

    return (
        <div className=' h-screen'>
            <div className='grid grid-cols-2 gap-10 '>
                <div className='flex flex-col items-center justify-center h-screen'>
                    <div className='border p-2 rounded-md rounded-br-3xl'>
                        <img className='rounded-md mb-4' src={image} alt="" />
                        <h1 className='text-lg font-bold'>{name}</h1>
                    </div>
                </div>
                <div className='flex flex-col justify-around'>
                    <div className='grid grid-cols-3 gap-5 '>
                        <div className='border p-2 '>
                            <p className='text-sm text-[#498afa] mb-2'>Status</p>
                            <p className='text-xl font-bold'>{status}</p>
                        </div>
                        <div className='border p-2 '>
                            <p className='text-sm text-[#498afa] mb-2'>Species</p>
                            <p className='text-xl font-bold'>{species}</p>
                        </div>
                        <div className='border p-2 '>
                            <p className='text-sm text-[#498afa] mb-2'>Gender</p>
                            <p className='text-xl font-bold'>{gender}</p>
                        </div>
                    </div>
                    <div className='border p-2 '>
                        <p className='text-sm '>Origin</p>
                        <p className='text-xl font-bold mt-2'>{origin}</p>
                    </div>
                    <div className='border p-2 '>
                        <p className='text-sm '>Location</p>
                        <p className='text-xl font-bold mt-2'>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CastDetails
