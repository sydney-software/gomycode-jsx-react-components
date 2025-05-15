import React from 'react';
import product from '../data/product';

interface DescriptionProps {
  className?: string;
}

const Description: React.FC<DescriptionProps> = ({ className }) => {
  return (
    <p className={`text-gray-600 leading-relaxed mb-4 ${className || ''}`}>
      {product.description}
    </p>
  );
};

export default Description;
