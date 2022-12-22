import './ItemListContainer.scss'

import { Button } from 'react-bootstrap'

export const ItemListContainer = ( {nombre, talle , precio} ) => {

    return (
        <div className="itemListContainer">
            <h2>Nombre: {nombre}</h2>
            <p>Talle: <strong>{talle}</strong></p>
            <p>Precio: {precio}</p>

            {/* <button className='btn btn-primary'>Click me!</button> */}
            <Button variant="success" className="otra-clase">Click me!</Button>
        </div>
    )
}