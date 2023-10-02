import { NavLink } from "react-router-dom"
import style from './Header.module.scss'

export const Header = () => {
    return (
        <>
            <div className={style.headerContainer}>
                <img src="/Star_Wars_Logo.svg.png" alt="" />
                <ul>
                    <li><NavLink to='/'>All Films</NavLink></li>
                    <li><NavLink to='/characters'>All Characters</NavLink></li>
                </ul>
            </div>

        </>
    )
}