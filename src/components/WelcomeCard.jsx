import Card from 'react-bootstrap/Card';

<<<<<<< HEAD
function WelcomeCard() {
    const fullName = 'Nguyễn Văn An';
    const birthYear = 2005;
    const currentYear = 2026;
    const major = 'Software Engineering';
    const hour = new Date().getHours();
    // Xác định buổi trong ngày (session khởi tạo là 'sáng', dùng if cập nhật thành 'chiều' nếu hour >= 12 và 'tối' nếu hour >= 18).
    let session = 'sáng';
    if (hour >= 12) {
        session = 'chiều';
    }
    if (hour >= 18) {
        session = 'tối';
    }
    //Tạo chuỗi lời chào greeting và tính toán age trực tiếp trong Template Literal: ${currentYear - birthYear} tuổi.
    const greeting = `Chào buổi ${session}, ${fullName}!`;
    //Tạo biến borderClass xác định màu viền: 'border-success' (khi age >= 18) hoặc 'border-warning' (khi age < 18).
    const borderClass = (currentYear - birthYear) >= 18 ? 'border-success' : 'border-warning';
    // Dựng giao diện bằng React-Bootstrap Card với className={`shadow-sm ${borderClass}`} chứa Card.Header, Card.Body, Card.Title và Card.Text
    return (
        <>
            <Card className={`shadow-sm ${borderClass}`}>
                <Card.Body>
                    <Card.Title>{greeting}</Card.Title>
                    <Card.Text>
                        You are {currentYear - birthYear} years old and studying {major}.
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

=======
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
>>>>>>> d6a21098b2c8703f544b0ec7cd29f92d258d58b2
export default WelcomeCard;