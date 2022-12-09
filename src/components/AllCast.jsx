import React, { useState } from 'react'
import star from '../assets/Star.png'

const AllCast = () => {
    const [category, setCategory] = useState('')
    const [item, setItem] = useState('')

    const handleSelect = (event) => {
        setCategory(event.target.value);
    }
    const handleInput = (event) => {
        setItem(event.target.value);
    }

    return (
        <div style={{ background: `url(${star})`, backgroundRepeat: 'no-repeat', objectFit: 'cover' }} >
            <div className='max-w-7xl md:w-10/12 mx-auto h-screen py-5'>
                <div className='flex justify-between items-center'>
                    <h2>The cast</h2>
                    <div>
                        <form className='' >
                            <select onChange={handleSelect} name="category" id="" className='text-blue-500'>
                                <option value="character">Character</option>
                                <option value="location">Location</option>
                                <option value="episode">Episode</option>
                            </select>
                            <input onChange={handleInput} className='' type="text" name="item" id="" />
                        </form>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default AllCast
