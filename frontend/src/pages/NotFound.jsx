import React from 'react'
import { Link } from 'react-router-dom'


const NotFound = () => {

    return (
        <div className="page-notFound">
            <h2>Oups ! c'est le mauvais chemin</h2>
                <Link id="RouterNavLink" to={`/`}>
                    <button className="">Retourner sur le bon chemin</button>
                </Link>
        </div>
    )
}

export default NotFound
