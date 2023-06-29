import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'

const logoUrl = "https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"

const Footer = ()=>{
    return (
        <Container fluid style={{background:'black', paddingBottom:'50px'}}>
            <Container style={{display:'flex',flexFlow:'row', paddingTop:'20px', background: 'black'}}>
                <Row>
                    <Col xs={12}>
                        <img
                            alt=""
                            src={logoUrl}
                            //   width="30"
                            height="60"
                            className="d-inline-block align-top"
                            />{' '}
                    </Col>
                    <Col xs={12}>
                    </Col>
                    <Col xs={12}>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Footer;