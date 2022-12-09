import { useEffect, useState } from "react";

const useCast = (page) => {
    const [cast, setCast] = useState([])
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
            .then(res => res.json())
            .then(data => setCast(data.results))
    }, [page])
    return [cast, setCast]
}
export default useCast;