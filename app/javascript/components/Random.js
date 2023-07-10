import React, { useEffect, useState } from 'react';

export default function Random() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    fetch('/api/v1/random_greeting') // Replace with your API endpoint URL
      .then((response) => response.json())
      .then((data) => setGreeting(data.message))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>To you my dear I would say: </h1>
      <h3>{greeting}</h3>
    </div>
  )
}
