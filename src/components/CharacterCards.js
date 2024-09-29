import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const CharacterCards = ({ filteredChars }) => {
  return (
    <Row xs={1} md={3} lg={4} className="g-4">
      {filteredChars.filter(char => char.image).map((char, idx) => (
        <Col key={idx}>
          <Card className="h-100 magic-card">
            <Card.Img variant="top" style={{ height: '250px' }} src={char.image} alt={char.name} />
            <Card.Body>
              <Card.Title className="text-center magic-text">{char.name}</Card.Title>
              <Card.Text>
                <strong>House:</strong> {char.house || 'N/A'}
                <br />
                <strong>Ancestry:</strong> {char.ancestry || 'N/A'}
                <br />
                <strong>Species:</strong> {char.species || 'N/A'}
                <br />
                <strong>Wizard?</strong> {char.wizard ? 'Yes' : 'No'}
                <br />
                <strong>Actor:</strong> {char.actor || 'N/A'}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CharacterCards;
