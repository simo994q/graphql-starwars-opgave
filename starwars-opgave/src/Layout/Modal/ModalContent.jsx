import { getFilm } from "../../queries/getFilm"
import { useQuery } from "@tanstack/react-query"
import { request } from 'graphql-request'
import style from './ModalContent.module.scss'


export const ModalContent = (props) => {

    const { data, isLoading, error } = useQuery({
        queryKey: ['getStarWarsFilm'],
        queryFn: async () => request(`https://swapi-graphql.netlify.app/.netlify/functions/index`, getFilm, {filmId: props.filmId})
    })

    if (isLoading) return <p>Loading...</p>

    if (error) return <p>Error: {error.message}</p>

    console.log(data);

    return (
        <>
        <div className={style.modalContentContainer}>
            <h2>{data.film.title}</h2>
            <p>{data.film.releaseDate}</p>
            <p>{data.film.openingCrawl}</p>
        </div>
        <button>Close</button>
        </>
    )

}