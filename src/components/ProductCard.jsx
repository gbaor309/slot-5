import { Card, Badge, Button } from 'react-bootstrap';

const ProductCard = ({ product }) => {
  const { name = 'Sản phẩm chưa đặt tên', price, image, rating, category, inStock, discount = 0 } = product;
  
  const imageSrc = image ?? 'https://placehold.co/300x200?text=No+Image';
  const categoryName = category?.name ?? 'Chưa phân loại';
  const rate = rating?.rate ?? 'Chưa có';
  const count = rating?.count ?? 0;
  
  // Dùng ?? thay vì || vì nếu price = 0, || sẽ coi 0 là false và in ra 'Liên hệ', trong khi ?? giữ lại số 0.
  const priceDisplay = price?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) ?? 'Liên hệ';
  const finalPrice = price * (1 - discount / 100);

  return (
    <Card className={`h-100 position-relative ${inStock ? '' : 'opacity-50'}`}>
      {discount > 0 && <Badge bg="danger" className="position-absolute top-0 end-0 m-2">-{discount}%</Badge>}
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Badge bg="info" className="mb-2">{categoryName}</Badge>{' '}
        {rating?.rate >= 4.5 && <Badge bg="warning" text="dark" className="mb-2">Bán chạy</Badge>}
        <Card.Text>
          {discount > 0 ? (
            <>
              <del className="text-muted me-2">{priceDisplay}</del>
              <strong className="text-danger">{finalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</strong>
            </>
          ) : (
            <strong>{priceDisplay}</strong>
          )}
          <br />
          ⭐ {rate} ({count} đánh giá)
        </Card.Text>
        {inStock ? <Badge bg="success" className="mb-3 d-block">Còn hàng</Badge> : <Badge bg="secondary" className="mb-3 d-block">Hết hàng</Badge>}
        <Button variant="primary" disabled={!inStock} className="w-100">
          {inStock ? 'Thêm vào giỏ' : 'Không khả dụng'}
        </Button>
      </Card.Body>
    </Card>
  );
};
export default ProductCard;