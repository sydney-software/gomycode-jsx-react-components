import React from 'react';
import product from '../data/product';

interface NameProps {
  className?: string;
}

const Name: React.FC<NameProps> = ({ className }) => {
  return (
    <h2 className={`text-2xl font-bold text-gray-800 mb-2 ${className || ''}`}>
      {product.name}
    </h2>
  );
};

export default Name;
