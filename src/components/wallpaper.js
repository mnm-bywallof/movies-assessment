import React from 'react';
import { Container } from 'react-bootstrap';

const Wallpaper = ()=>{
    return (
        <Container fluid style={{backgroundColor:'tomato', minHeight:'70vh', backgroundImage:'url(https://images-na.ssl-images-amazon.com/images/S/pv-target-images/ca7462cd88e3c7b20a973a39115c5a27f6dce9d5faf1aedc5d36d2ed0423f82b._RI_TTW_.jpg)',
        display:'flex',flexFlow:'column',justifyContent:'end', padding:'0', margin:'0',
        backgroundPosition:'center', backgroundSize:'cover'}}>
            <div style={{margin:'0 auto',backgroundImage:'linear-gradient(transparent, white)',
            paddingTop:'100px',width:'100%',padding:'0px',display:'flex',flexFlow:'row',justifyContent:'center'}}>
                <div style={{margin:'0 auto',textAlign:'center', maxWidth: '500px'}}>
                    <img src={'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTEibJWvunX2oMwlTaR2Rz2vqqx329LwU-tjm_rcPiGeK24I7rj'}
                        width={'200px'} height={'auto'} style={{border:'black 2px solid'}}/>
                    <h1 style={{fontFamily:'sans-serif'}}>Gridiron Gang</h1>
                    <label>Sean Porter works at a juvenile detention centre where the children suffer from low self-esteem. To build their morale, he decides to mould them into a winning football team.</label>
                    <button type='button'>Watched</button>
                </div>
            </div>
        </Container>
    )
}

export default Wallpaper;