import React from 'react';
import { render, screen } from '@testing-library/react'; 
import '@testing-library/jest-dom';
import {Entry} from "../[id].js"; 

// Import your component

test('renders a person entry', () => {
  // Define mock data for the component
  const itemData = {
    people: [{
    id: 1,
    name: 'John Doe',
    phone: '555-123-4567',
    birthdate: '1990-01-01',
   } ],
    
    
    
    friends: [
      {
        id: 1,
        age: 30,
        height: '5\'10"',
        weight: '160 lbs',
        hundredmdash: '10s',
        associated_id: 1
      },
    ],
    family: [
      {
        id: 1,
        'favorite-food': 'Pizza',
        'favorite-place': 'Beach',
        'favorite-animal': 'Dog',
        'favorite-hobby': 'Reading',
        associated_id: 1
      },
    ],
  };

  // Render the Entry component with mock data
  const { getByText } = render(<Entry itemData={itemData} />);

  // Write assertions to check if the rendered content matches your expectations
  expect(getByText('John Doe')).toBeInTheDocument();
  expect(getByText('555-123-4567')).toBeInTheDocument();
  expect(getByText('1990-01-01')).toBeInTheDocument();
  expect(getByText('Age:')).toBeInTheDocument();
  expect(getByText('30')).toBeInTheDocument();
  expect(getByText('Height:')).toBeInTheDocument();
  expect(getByText('5\'10"')).toBeInTheDocument();
  // Add more assertions as needed for your component's output
});