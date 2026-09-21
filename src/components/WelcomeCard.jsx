import Card from 'react-bootstrap/Card';

const WelcomeCard = () => {
  const fullName = 'Nguyễn Văn An';
  const birthYear = 2005;
  const currentYear = 2026;
  const major = 'Software Engineering';
  const hour = new Date().getHours();
  
  let session = 'sáng';
  if (hour >= 12) session = 'chiều';
  if (hour >= 18) session = 'tối';

  const age = currentYear - birthYear;
  const borderClass = age >= 18 ? 'border-success' : 'border-warning';
  const greeting = `Chào buổi ${session}, ${fullName}!`;

  return (
    <Card className={`shadow-sm mb-4 ${borderClass}`} style={{ maxWidth: 400 }}>
      <Card.Header>Thẻ sinh viên</Card.Header>
      <Card.Body>
        <Card.Title>{greeting}</Card.Title>
        <Card.Text>{age} tuổi - {major}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default WelcomeCard;