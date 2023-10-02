import { useQuery } from "@tanstack/react-query"
import { getFilms } from "../../queries/getFilms.js"
import { request } from 'graphql-request'

import style from './AllFilms.module.scss'
import { useState } from "react"
import { ModalContent } from "../../Layout/Modal/ModalContent.jsx"
import Modal from 'react-modal';

export const AllFilms = () => {

    const [modalIsOpen, setIsOpen] = useState(false);

    const { data, isLoading, error } = useQuery({
        queryKey: ['getStarWarsFilms'],
        queryFn: async () => request(`https://swapi-graphql.netlify.app/.netlify/functions/index`, getFilms)
    })

    const [filmId, setFilmId] = useState()

    console.log(data);

    if (isLoading) return <p>Loading...</p>

    if (error) return <p>Error: {error.message}</p>

    return (
        <>
            <div className={style.filmsContainer}>
                {data.allFilms.films.map((item, index) => {
                    return (
                        <p key={index} onClick={() => {setFilmId(item.id), setIsOpen(true)}}>{item.title}</p>
                    )
                })}
            </div>
            <Modal
            isOpen={modalIsOpen}>
                <ModalContent filmId={filmId} />
            </Modal>
        </>
    )
}