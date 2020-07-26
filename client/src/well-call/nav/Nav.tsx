import React from 'react';
import { Menu } from 'antd';
import './Nav.css';
import logo from './WELLCALL_LOGO.png'

interface NavProps {
}

export default function Nav(props: NavProps) {

const handleClick = (e: Event) => {
    console.log('Clicked')
}

    return (
        <div className={'nav'}>
            <img src={logo} style={{width:'90px', height:'70px', padding:'2px'}} alt={'logo'}/>
            <Menu
                className={"nav-bar"}
                onClick={() => handleClick}
                mode={'horizontal'}>
                <Menu.Item 
                    key={'Home'}>
                    <a href={'/'}>Home</a>
                </Menu.Item>
                <Menu.Item 
                    key={'about'}>
                    <a href={'/about'}>About</a>
                </Menu.Item>
                <Menu.Item 
                    key={'Contact'}>
                    <a href={'/contact'}>Contact</a>
                </Menu.Item>
            </Menu>
        </div>
    )
}