import React from 'react';

export default function ErrorTest() {
  // Intentional error: accessing property of undefined
  const data = undefined;
  
  return (
    <div>
      <h1>This component has an intentional error</h1>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
    </div>
  );
}
