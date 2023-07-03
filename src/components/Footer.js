import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import AddMovie from './AddMovie'

const logoUrl = "https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"

const Footer = ()=>{
    return (
        <Container fluid style={{background:'black', paddingBottom:'50px',paddingTop:'50px'}}>
            <Container style={{display:'flex',flexFlow:'row', paddingTop:'50px', background: 'black'}}>
                <Row style={{background:'transparent', width:'100%',color:'whitesmoke'}}>
                    <Col xs={12} md={3} lg={3} sm={12} style={{flex:'1', flexFlow:'column',justifyContent:'center',justifyItems:'center'}}>
                        <img
                            alt=""
                            src={logoUrl}
                            //   width="30"
                            height="60"
                            className="d-inline-block align-top"
                            />{' '}
                    </Col>
                    <Col xs={12} style={{flex:'1', flexFlow:'column',justifyContent:'center',justifyItems:'center'}} md={3} lg={3} sm={12}>
                        <h4>Administration</h4>
                        <AddMovie></AddMovie>
                    </Col>
                    <Col md={3} lg={3} sm={12} xs={12}>
                        <h4>API Endpoints</h4>
                        GitHub <a href='https://github.com/mnm-bywallof/movies-assessment#readme'>README.md</a>
                    </Col>
                    <Col md={3} lg={3} sm={12} xs={12}>
                        <h4>About</h4>
                        built by <a href='https://www.linkedin.com/in/riaz-hlatshwayo-6754981b4/' title=''>Riaz Hlatshwayo</a>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Footer;