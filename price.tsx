import React from 'react';
import product from '../data/product';

interface PriceProps {
  className?: string;
}

const Price: React.FC<PriceProps> = ({ className }) => {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(product.price);

  return (
    <div className={`text-xl font-semibold text-blue-600 mb-3 ${className || ''}`}>
      {formattedPrice}
    </div>
  );
};

export default Price;
