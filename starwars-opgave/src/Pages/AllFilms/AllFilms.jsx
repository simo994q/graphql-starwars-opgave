import { useQuery } from "@tanstack/react-query"
import { getFilms } from "../../queries/getFilms.js"
import { request } from 'graphql-request'

import style from './AllFilms.module.scss'

export const AllFilms = () => {

    const { data, isLoading, error } = useQuery({
        queryKey: ['getStarWarsPerson'],
        queryFn: async () => request(`https://swapi-graphql.netlify.app/.netlify/functions/index`, getFilms)
    })

    console.log(data);

    if (isLoading) return <p>Loading...</p>

    if (error) return <p>Error: {error.message}</p>

    return (
        <>
        <div className={style.filmsContainer}>
        {data.allFilms.films.map((item, index) => {
            return (
                <p key={index}>{item.title}</p>
            )
        })}
        </div>
        </>
    )
}