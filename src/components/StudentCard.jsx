import { Card, ListGroup, Button } from 'react-bootstrap';

const StudentCard = ({ student }) => {
  const { id, name, major, gpa, avatar, contact: { email: studentEmail, phone } } = student;
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={avatar} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{id} - {major}</Card.Subtitle>
        <ListGroup variant="flush">
          <ListGroup.Item>GPA: {gpa}</ListGroup.Item>
          <ListGroup.Item>Email: {studentEmail}</ListGroup.Item>
          <ListGroup.Item>Phone: {phone}</ListGroup.Item>
        </ListGroup>
        <Button variant="primary" className="mt-3">Xem hồ sơ</Button>
      </Card.Body>
    </Card>
  );
};
export default StudentCard;