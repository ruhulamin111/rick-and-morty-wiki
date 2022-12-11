import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import useCastDetails from '../hooks/useCastDetails'

const CastDetails = () => {
    const { id } = useParams()
    const [castDetails] = useCastDetails(id)

    return (
        <div>
            <h1>cast details {castDetails} </h1>
        </div>
    )
}

export default CastDetails
