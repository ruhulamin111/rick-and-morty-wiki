import { useEffect, useState } from "react";

const useCastDetails = (id) => {
    const [castDetails, setCastDetails] = useState([])
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}
        `)
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }, [id])
    return [castDetails, setCastDetails]
}
export default useCastDetails;