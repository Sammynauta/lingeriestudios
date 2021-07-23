import React from 'react';
import Navbar from './Navbar';
import '../styles/header.css';
import Footer from './Footer';

function Header() {
    return (
        <header>
            <Navbar />
            <article>
                <strong>Sense & Sensuality</strong>
                <span>Premium Lingerie</span>
            </article>

            <a className='botao'>Explore <i class="fas fa-angle-double-right" id='seta'></i></a>
           <Footer />
        </header>
    )
}

export default Header;