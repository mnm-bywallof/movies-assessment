import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MovieInfo from './MovieInfo'
import { Link } from 'react-router-dom';

function MoviewCard(props) {
    const movie = props.movie;
    return (
        <Link to={"/movie"} state={movie} style={{width:'300px'}}>
            <Card style={{ width: '18rem', padding:'0px' }}>
            <Card.Img variant="top" src={movie.coverUrl} width={'100%'} height={'400'}/>
            <Card.Body>
                <Card.Title>{`${movie.title}`}</Card.Title>
                <Card.Text>
                {`${movie.type.toUpperCase()}`} &#x2022; {`${movie.likes}% LiKED`}
                </Card.Text>
                {/* <MovieInfo text={"Open"} movie={movie}></MovieInfo> */}
            </Card.Body>
            </Card>
        </Link>
    );
}

export default MoviewCard;