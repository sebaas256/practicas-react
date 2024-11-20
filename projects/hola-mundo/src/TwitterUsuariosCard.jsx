import { useState } from "react"

export function TwitterUsuariosCard ({children, userName, initialIsFollowing}) {
const [isfollowing, setIsFollowing]  = useState(initialIsFollowing)

    const text = isfollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isfollowing 
    ? 'usuariosCard-boton is-following' 
    : 'usuariosCard-boton'

    const handleClick = () =>{
        setIsFollowing(!isfollowing)
    }
 
    return(
        <article className='usuariosCard'>
        <header className='usuariosCard-header'>
            <img className='usuariosCard-avatar'
            src={`https://unavatar.io/soundcloud/${userName}`}
            alt="Imagen de gorillaz" />
            <div className='usuariosCard-info'>
                <strong>{children}</strong>
                <span className='usuariosCard-infoUserName'>@{userName}</span>
            </div>
        </header>

        <aside>
            <button className= {buttonClassName} onClick={handleClick}>
                <span className="tw-followcard-text">{text}</span>
                <span className='tw-followcard-stopfollow'>Dejar de seguir</span>
            </button> 
        </aside>
    </article>
    )
}