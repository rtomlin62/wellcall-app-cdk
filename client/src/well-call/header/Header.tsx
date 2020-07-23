import React from 'react';
import { Menu } from 'antd';
import './Header.css';
import { Row, Col, Divider } from 'antd';

import { PhoneFilled, MailFilled, ReadOutlined } from '@ant-design/icons';

export default function  Header() {

const handleClick = (e: Event) => {
    console.log('Clicked')
}
    return (
        <Row className={'header'} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
            <Col className="gutter-row" xs={24} sm={24} md={24} lg={6} xl={6} xxl={6}>
                <div className={'text'}>
                    Questions?  
                    <a className={'link'} href={'mailto:Marketing@WeWillCallTix.com'}>
                        <MailFilled className={'icon'}/>
                        Marketing@WeWillCallTix.com
                    </a>
                </div>
            </Col>
            <Col className="gutter-row" xs={24} sm={24} md={24} lg={13} xl={13} xxl={13}>
                <div className={'text'}>
                    Toll Free Number: 
                    <a className={'link'} href={'tel:833-336-8895'}>
                        <PhoneFilled className={'icon'}/>
                        833-336-8895
                    </a>
                </div>
            </Col>
            <Col className="gutter-row" xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
                <div className={'text right-side'}>
                    Register
                </div>
            </Col>
            <Col className="gutter-row" xs={12} sm={12} md={12} lg={2} xl={2} xxl={2}>
                <div className={'text right-side'}>
                    Login
                </div>
            </Col>
        </Row>
    )
}