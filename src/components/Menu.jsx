import React from 'react'

export default function Menu() {
    return (
        <div className='menu_mobile'>
            <div className="menu_mobile_content">
                <ol>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Resources</li>
                </ol>

                <hr />

                <button className='btn login_menu'>Login</button>
                <button className='btn btn_menu-mobile btn-primary'>Sign Up</button>
            </div>
        </div>
    )
}