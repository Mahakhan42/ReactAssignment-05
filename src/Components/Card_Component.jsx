import React from 'react';
import { Card } from 'react-bootstrap';

const Card_Component = ({ img, title, text }) => {
  return <div> <br /><br />
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
    <br /><br />
    </div>
}

export {Card_Component};
