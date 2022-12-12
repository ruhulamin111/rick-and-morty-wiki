import { useEffect, useState } from "react";

const useCastDetails = (id) => {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [status, setStatus] = useState('')
    const [species, setSpecies] = useState('')
    const [gender, setGender] = useState('')
    const [location, setLocation] = useState('')
    const [origin, setOrigin] = useState('')
    const [episode, setEpisode] = useState('')

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${id}
        `)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setName(data.name)
                setImage(data.image)
                setStatus(data.status)
                setSpecies(data.species)
                setGender(data.gender)
                setLocation(data.location.name)
                setOrigin(data.origin.name)
                setEpisode(data.episode[0])
            })
    }, [id])
    return [name, image, status, species, gender, location, origin, episode]
}
export default useCastDetails;