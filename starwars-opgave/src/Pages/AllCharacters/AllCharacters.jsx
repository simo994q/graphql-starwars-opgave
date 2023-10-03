import { useQuery } from "@tanstack/react-query"
import { getCharacters } from "../../queries/getCharacters.js"
import { request } from 'graphql-request'
import style from './AllCharacters.module.scss'
import { useState } from "react"
import Modal from 'react-modal';

export const AllCharacters = () => {

    const [modalIsOpen, setIsOpen] = useState(false);

    const [singleCharacterData, setSingleCharacterData] = useState()

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
        queryKey: ['getStarWarsCharacters'],
        queryFn: async () => request(`https://swapi-graphql.netlify.app/.netlify/functions/index`, getCharacters)
    })

    console.log(data);

    if (isLoading) return <p>Loading...</p>

    if (error) return <p>Error: {error.message}</p>

    return (
        <>
            <div className={style.charactersContainer}>
                {data.allPeople.people.map((item, index) => {
                    return (
                        <h2 key={index} onClick={() => { setSingleCharacterData(item), setIsOpen(true) }}>{item.name}</h2>
                    )
                })}
            </div>
            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                className={style.modal}
                overlayClassName={style.modalOverlay}>
                <div className={style.modalContentContainer}>
                    <h2>{singleCharacterData?.name}</h2>
                    <p>Birth year: {singleCharacterData?.birthYear}</p>
                    <p>Species: {singleCharacterData?.species ? singleCharacterData?.species.name : 'Human'}</p>
                    <p>Homeworld: {singleCharacterData?.homeworld.name}</p>
                </div>
                <button onClick={() => setIsOpen(false)}>Close</button>
            </Modal>
        </>
    )
}