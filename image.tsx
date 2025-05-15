import React from 'react';
import product from '../data/product';

interface ImageProps {
  className?: string;
  altText?: string;
}

const Image: React.FC<ImageProps> = ({ className, altText }) => {
  return (
    <div className={`overflow-hidden rounded-lg mb-4 ${className || ''}`}>
      <img 
        src={product.image} 
        alt={altText || product.name}
        className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
};

export default Image;
