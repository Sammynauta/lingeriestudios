import React, { useState } from 'react';
import '../styles/navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const openClose = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <nav>
            <div className='ladoesquerdo'>
                <h1>LOGO</h1>
            </div>
            <div className='ladodireito'>
                <ul className={click ? 'nav-menu active' : 'nav-menu'} onClick={closeMobileMenu}>
                    <li className='nav-item' onClick={closeMobileMenu}>
                        <a>Home</a>
                    </li>
                    <li className='nav-item' onClick={closeMobileMenu}>
                        <a>Categorias</a>
                    </li>
                    <li className='nav-item' onClick={closeMobileMenu}>
                        <a>Suporte</a>
                    </li>
                </ul>

                <div className='acess'>
                    <button>Login</button>
                    <button>Cadastro</button>
                </div>

                <div className='menu-icon' onClick={openClose}>
                    <i className={click ? ' fas fa-times' : 'fas fa-bars'} id='menu'></i>
                </div>

            </div>
        </nav>
    )
}

export default Navbar;