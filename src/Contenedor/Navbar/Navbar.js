import './Navbar.scss'
import {CartWidget} from "./Contenedor/CartWidget"

export const Navbar = () => {

    return (
        <header className="header">
            <div className='header__container'>
                <h1 className="header__logo">FLORECER MODA CIRCULAR</h1>

                <nav className="header__nav">
                    <a className="header__link" href="#">Home</a>
                    <a className="header__link" href="#">Productos</a>
                    <a className="header__link" href="#">Contactos</a>
                    <a className="header__link" href="#">Conoceme</a>
                    
                </nav>
                <CartWidget/>
            </div>
        </header>
    )
}