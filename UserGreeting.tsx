import React from 'react';
import { ArrowRight } from 'lucide-react';

interface UserGreetingProps {
  firstName: string | null;
}

const UserGreeting: React.FC<UserGreetingProps> = ({ firstName }) => {
  return (
    <div className="mt-6 text-center">
      <h3 className="text-xl font-medium text-gray-700 mb-3">
        {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
      </h3>
      
      {firstName && (
        <div className="mt-4 overflow-hidden rounded-md max-w-xs mx-auto">
          <img 
            src="https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Welcome" 
            className="w-full h-auto transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}

      <div className="mt-4 flex items-center justify-center text-blue-600 hover:text-blue-800 transition-colors group">
        <span>Explore more products</span>
        <ArrowRight className="ml-1 w-4 h-4 transition-transform transform group-hover:translate-x-1" />
      </div>
    </div>
  );
};

export default UserGreeting;
