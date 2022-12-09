import { useEffect, useState } from "react";

const useEpisode = (page) => {
    const [episode, setEpisode] = useState([])
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
            .then(res => res.json())
            .then(data => setEpisode(data.results))
    }, [page])
    return [episode, setEpisode]
}
export default useEpisode;