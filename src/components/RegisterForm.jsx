import { Form, Card, Row, Col } from 'react-bootstrap';
import InputField from './InputField';
import AppButton from './AppButton';
import { fields, genders, majors } from '../data/registerConfig';

const RegisterForm = () => {
  return (
    <Row className="justify-content-center mb-5">
      <Col md={6}>
        <Card className="shadow-sm">
          <Card.Body>
            <Card.Title className="text-center mb-4">Đăng ký tài khoản</Card.Title>
            <Form onSubmit={(event) => event.preventDefault()}>
              {fields.map((field) => (
                <InputField key={field.id} {...field} />
              ))}

              <Form.Group className="mb-3">
                <Form.Label className="d-block">Giới tính</Form.Label>
                {genders.map((gender) => (
                  <Form.Check inline key={gender} type="radio" name="gender" id={`gender-${gender}`} label={gender} />
                ))}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Chuyên ngành</Form.Label>
                <Form.Select>
                  <option>-- Chọn chuyên ngành --</option>
                  {majors.map((major) => (
                    <option key={major} value={major}>{major}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Check type="checkbox" label="Tôi đồng ý điều khoản" required />
              </Form.Group>

              <AppButton type="submit" className="w-100">Đăng ký</AppButton>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
export default RegisterForm;