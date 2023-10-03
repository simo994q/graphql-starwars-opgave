import { useQuery } from "@tanstack/react-query"
import { getFilms } from "../../queries/getFilms.js"
import { request } from 'graphql-request'
import style from './AllFilms.module.scss'
import { useState } from "react"
import Modal from 'react-modal';

export const AllFilms = () => {

    const [modalIsOpen, setIsOpen] = useState(false);

    const [singleFilmData, setSingleFilmData] = useState()

    Modal.setAppElement('#root');

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const { data, isLoading, error } = useQuery({
        queryKey: ['getStarWarsFilms'],
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
                        <h2 key={index} onClick={() => { setSingleFilmData(item), setIsOpen(true) }}>{item.title}</h2>
                    )
                })}
            </div>
            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                className={style.modal}
                overlayClassName={style.modalOverlay}>
                <div className={style.modalContentContainer}>
                    <h2>{singleFilmData?.title}</h2>
                    <p>Release date: {singleFilmData?.releaseDate}</p>
                    <p>{singleFilmData?.openingCrawl}</p>
                </div>
                <button onClick={() => setIsOpen(false)}>Close</button>
            </Modal>
        </>
    )
}