import { Row, Col, Button } from 'react-bootstrap';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  const categories = ['Tất cả', ...new Set(products.map((p) => p.category?.name ?? 'Chưa phân loại'))];

  return (
    <div className="mb-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Có {products.length} sản phẩm</h4>
        <div className="d-flex gap-2">
          {categories.map((cat) => (
            <Button key={cat} variant="outline-primary" size="sm">{cat}</Button>
          ))}
        </div>
      </div>
      <Row xs={1} md={2} lg={4} className="g-4">
        {products.map((product) => (
          <Col key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default ProductList;