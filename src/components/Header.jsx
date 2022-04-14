import React, { useState } from 'react';
import Menu from "./Menu";

export default function Header() {
    const [openMenu, setMenu] = useState(false);
    
    return (
        <div className="container">
            <nav>
                <a href="#" className="logo">
                    <img src="/images/logo.svg" alt="logo" />
                </a>

                <ul>
                    <li className='list_item'><a href="#">Features</a></li>
                    <li className='list_item'><a href="#">Pricing</a></li>
                    <li className='list_item'><a href="#">Resources</a></li>
                </ul>

                <div className="cta">
                    <button className='btn login'>Login</button>
                    <button className='btn btn-primary'>Sign Up</button>
                </div>

                <button className="menu" onClick={() => setMenu(!openMenu)}>
                    {openMenu
                        ? <i class="fa-solid fa-xmark icon"></i>
                        : <i class="fa-solid fa-bars"></i>}
                </button>

                {openMenu && <Menu />}
            </nav>

            <div className="hero">
                <div className="info">
                    <h1 className="title_hero">
                        More than just shorter links
                    </h1>

                    <p className="sub_title">
                        Build your brand's recognition and get detailed insights on how your links are performing.
                    </p>

                    <a href='#' className="btn btn-hero btn-primary">
                        Get Started
                    </a>
                </div>

                <div className="img_hero">
                    <img src="/images/illustration-working.svg" alt="hero" />
                </div>
            </div>
        </div>
    )
}