import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MoviewCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://pbs.twimg.com/media/FqDpSrFWwAcXJ5N.jpg:large"/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default MoviewCard;