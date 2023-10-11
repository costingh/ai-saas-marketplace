import React from 'react'
import Icon from './Icon'
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

function InvisibleNavbar() {
    const data = useUser();

    return (
        <div className='invisible-navbar'>
            <div className="left">
               
            </div>
            <div className="right">
                <div className="upgrade-btn">
                    <span>Upgrade ⚡️</span>
                </div>

                <div className="search-bar">
                    <Icon icon='search' />
                    <input type="text" placeholder='Search products' />
                </div>
                <div className="user-initials">
                    {data?.user?.username ? data?.user?.username.slice(0, 2) : 'Anonym'}
                </div>
            </div>
        </div>
    )
}

export default InvisibleNavbar