import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import star from '../assets/Star.png'
import useCast from '../hooks/useCast'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";

const AllCast = () => {
    const [category, setCategory] = useState('')
    const [item, setItem] = useState('')
    const [page, setPage] = useState(1)
    const [cast] = useCast(page)
    console.log('a', cast);
    const navigate = useNavigate()
    const handleSelect = (event) => {
        setCategory(event.target.value);
    }
    const handleInput = (event) => {
        setItem(event.target.value);
    }
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/${category}/?page=${page}&name=${item}`)
            .then(res => res.json())
            .then(data => (data.results))
    }, [category, item, page])

    const handleNext = () => {
        setPage(page + 1)
    }
    const handlePrevious = () => {
        if (page === 1) {
            return;
        }
        setPage(page - 1)
    }
    const castDetail = (id) => {
        navigate(`/castDetail/${id}`)
    }

    return (
        <div style={{ background: `url(${star})`, backgroundRepeat: 'no-repeat', objectFit: 'cover' }} >
            <div className='max-w-7xl md:w-10/12 mx-auto py-5'>
                {/* search option  */}
                <div className='flex justify-between items-center py-5'>
                    <h2 className='text-2xl font-bold text-[#59fa93]'>The Cast</h2>
                    <div>
                        <form className='flex items-center gap-2 ' >
                            <select onBlur={handleSelect} name="category" id="" className='text-blue-500'>
                                <option value="character">Character</option>
                                <option value="location">Location</option>
                                <option value="episode">Episode</option>
                            </select>
                            <input onChange={handleInput} className='' type="text" name="item" id="" placeholder='Search' />
                        </form>
                    </div>
                </div>
                {/* all cast show  */}
                <div className='grid grid-cols-5 gap-5'>
                    {
                        cast.map((castItem) => <div className='border p-2 rounded-md rounded-br-3xl' key={castItem.id}>
                            <img className='rounded-md mb-4' onClick={() => castDetail(castItem.id)} src={castItem.image} alt="" />
                            <h2 className='text-lg font-bold'>{castItem.name}</h2>
                        </div>)
                    }
                </div>
                {/* bottom pagination  */}
                <div className='flex gap-4 pt-8 items-center justify-center'>
                    <span>Page</span>
                    <span className='cursor-pointer text-2xl text-[#79fd92]' onClick={handlePrevious}><BsFillArrowLeftCircleFill /></span>
                    <span className='border p-3 text-sm rounded-full '>{page}</span>
                    <span className='cursor-pointer text-2xl text-[#79fd92]' onClick={handleNext}><BsFillArrowRightCircleFill /></span>
                    <span>of 42</span>
                </div>
            </div>
        </div>
    )
}

export default AllCast
