import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

const ProductCard: React.FC = () => {
  return (
    <Card className="shadow-lg border-0 rounded-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl">
      <div className="p-3">
        <Image />
      </div>
      <Card.Body className="p-4">
        <Name />
        <Price />
        <Description />
        <div className="flex gap-2">
          <Button 
            variant="primary" 
            className="bg-blue-600 hover:bg-blue-700 border-0 rounded-md py-2 px-4 text-white font-medium transition-colors"
          >
            Add to Cart
          </Button>
          <Button 
            variant="outline-secondary" 
            className="bg-transparent border border-gray-300 rounded-md py-2 px-4 text-gray-700 font-medium hover:bg-gray-100 transition-colors"
          >
            Learn More
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
