import { useEffect, useState } from "react";

const useLocations = (page) => {
    const [location, setLocation] = useState([])
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/location?page=${page}`)
            .then(res => res.json())
            .then(data => setLocation(data.results))
    }, [page])
    return [location, setLocation]
}
export default useLocations;