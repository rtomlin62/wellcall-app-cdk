import React from 'react';
import { BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Menu } from 'antd';
import { HomeOutlined, MailOutlined, ReadOutlined } from '@ant-design/icons';
import './Nav.css';
import About from '../about/About';
import Contact from '../contact/Contact';
import Home from '../home/Home';

const { SubMenu } = Menu;

interface NavProps {
}

export default function Nav(props: NavProps) {

const handleClick = (e: Event) => {
    console.log('Clicked')
}

    return (
        <div className={'nav'}>

            <Router>
                <Menu
                    onClick={() => handleClick}
                    mode={'horizontal'}>
                    <Menu.Item 
                        key={'Home'}
                        icon={<HomeOutlined />}>
                        <a href={'/'}>Home</a>
                    </Menu.Item>
                    <Menu.Item 
                        key={'about'}
                        icon={<ReadOutlined />}>
                        <a href={'/about'}>About</a>
                    </Menu.Item>
                    <Menu.Item 
                        key={'Contact'}
                        icon={<MailOutlined />}>
                        <a href={'/contact'}>Contact</a>
                    </Menu.Item>
                </Menu>

                <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
                </Switch>
            </Router>
        </div>
    )
}