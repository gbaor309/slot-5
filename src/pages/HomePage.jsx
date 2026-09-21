import { Card, Row, Col, InputGroup, Form, Alert } from 'react-bootstrap';
import { ProductList, AppButton, InputField } from '../components';
import { products } from '../data/products';
import { APP_NAME } from '../data/menu';

const HomePage = () => {
  // ES6: filter, spread, sort, slice, Set, map
  const onSale = products.filter((p) => p.discount > 0);
  const deals = [...onSale].sort((a, b) => b.discount - a.discount).slice(0, 4);
  const categories = [...new Set(products.map(p => p.category?.name ?? 'Chưa phân loại'))];

  // ES6: reduce, object shorthand, destructuring
  const stats = {
    total: products.length,
    inStockCount: products.filter(p => p.inStock).length,
    avgPrice: Math.round(products.reduce((sum, p) => sum + p.price, 0) / products.length)
  };
  const { total, inStockCount, avgPrice } = stats;

  const statCards = [
    { label: 'Tổng số sản phẩm', value: total },
    { label: 'Sản phẩm còn hàng', value: inStockCount },
    { label: 'Giá trung bình', value: avgPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) }
  ];

  return (
    <>
      {/* 1. Hero */}
      <Card bg="primary" text="white" className="mb-4 text-center p-4 shadow-sm">
        <h1>Chào mừng đến {APP_NAME}</h1>
        <p className="fs-5">Hôm nay có {onSale.length} sản phẩm đang giảm giá</p>
      </Card>

      {/* 2. Thống kê */}
      <Row className="mb-4 g-3">
        {statCards.map((stat, idx) => (
          <Col md={4} key={idx}>
            <Card className="text-center shadow-sm h-100">
              <Card.Body>
                <Card.Title className="text-muted">{stat.label}</Card.Title>
                <Card.Text className="fs-4 fw-bold">{stat.value}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* 3. Bộ lọc */}
      <InputGroup className="mb-5 shadow-sm">
        <Form.Control placeholder="Tìm sản phẩm..." />
        <Form.Select style={{ maxWidth: '200px' }}>
          <option>Tất cả danh mục</option>
          {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </Form.Select>
        <AppButton variant="primary">Tìm</AppButton>
      </InputGroup>

      {/* 4. Đang giảm giá */}
      <h3 className="mb-3 text-danger border-bottom pb-2">🔥 Đang giảm giá</h3>
      <ProductList products={deals} />

      {/* 5. Tất cả sản phẩm */}
      <h3 className="mb-3 border-bottom pb-2 mt-5">📦 Tất cả sản phẩm</h3>
      {products.length === 0 ? (
        <Alert variant="info">Chưa có sản phẩm</Alert>
      ) : (
        <ProductList products={products} />
      )}

      {/* 6. Nhận tin */}
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <Card className="shadow-sm">
            <Card.Body>
              <Card.Title className="text-center mb-3">Đăng ký nhận tin khuyến mãi</Card.Title>
              <Form onSubmit={(e) => e.preventDefault()} className="d-flex gap-2">
                <InputField id="newsletter" label="" type="email" placeholder="Nhập email của bạn" required className="flex-grow-1 mb-0" />
                <AppButton type="submit" variant="success">Đăng ký</AppButton>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default HomePage;