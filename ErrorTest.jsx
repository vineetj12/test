import React from 'react';

export default function ErrorTest() {
  // This will throw an error when rendered
  throw new Error('This is an intentional error for testing!');
  
  return (
    <div>
      <h1>This component has an intentional error</h1>
    </div>
  );
}
