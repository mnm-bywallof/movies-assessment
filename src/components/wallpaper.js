import React from 'react';
import { Container } from 'react-bootstrap';

const Wallpaper = ()=>{
    return (
        <Container fluid style={{backgroundColor:'tomato', minHeight:'70vh', backgroundImage:'url(https://occ-0-1380-1433.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABS_4IypoWMgBy3BDzobOe9GvoHw2yEF9fXWquMJJH4deFoCVChKWG-jKSS7PzXND5BClUpBDjyWCggNZA8StdcFqFJ23Yo-RXT29.jpg?r=fb0)',
        display:'flex',flexFlow:'column',justifyContent:'end', backgroundPosition:'center'}}>
            <div style={{margin:'0 auto'}}>
                <h1>Hello, world!</h1>
                <h1>Simplified learning</h1>
            </div>
        </Container>
    )
}

export default Wallpaper;