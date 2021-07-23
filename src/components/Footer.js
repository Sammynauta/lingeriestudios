import React from 'react';
import '../styles/footer.css';

function Footer() {
    return (
        <footer>
            <div className='media'>
                <ul className='media-icons'>
                    <li className='icons'>
                        <a><i className="fab fa-instagram"></i></a>
                    </li>
                    <li className='icons'>
                        <a><i className="fab fa-facebook-square"></i></a>
                    </li>
                    <li className='icons'>
                        <a><i className="fab fa-twitter"></i></a>
                    </li>
                </ul>
            </div>

            <div className="hashtag">
                <a><i class="fas fa-hashtag"></i>Lingeriestudios</a>
            </div>
            
            <div className='copy'>
                &copy; 2021 Lingerietudios. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer;