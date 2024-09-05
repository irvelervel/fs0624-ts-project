import { useState, ChangeEvent, FormEvent } from 'react'
import {
  Container,
  Row,
  Col,
  Alert,
  Badge,
  Form,
  Button,
} from 'react-bootstrap'

const BootstrapComponent = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    checkbox: false,
  })

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    property: string,
    checkbox: boolean
  ) => {
    setFormData({
      ...formData,
      [property]: checkbox ? (e as any).target.checked : e.target.value,
    })
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('OGGETTO DA INVIARE', formData)
  }

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Alert variant="warning">
            lorem ipsum<Badge>5</Badge>
          </Alert>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={(e) => handleChange(e, 'email', false)}
              />
              <Form.Text className="text-light">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => handleChange(e, 'password', false)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Check me out"
                checked={formData.checkbox}
                onChange={(e) => {
                  handleChange(e, 'checkbox', true)
                }}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default BootstrapComponent
