import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './components/ProductCard';
import UserGreeting from './components/UserGreeting';

function App() {
  // You can provide your name here or set to null
  const firstName: string | null = "John"; // Change to null to see conditional rendering
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8} xl={6}>
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Featured Product</h1>
              <p className="text-gray-600">Discover our premium quality offering</p>
            </div>
            
            <ProductCard />
            
            <UserGreeting firstName={firstName} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
