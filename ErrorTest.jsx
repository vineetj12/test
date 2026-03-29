import React from 'react';
import { nonExistentFunction } from './nonexistent-module.js';

export default function ErrorTest() {
  // Undefined variable - will cause build error
  const result = undefinedVariable;
  
  // Syntax error - missing closing parenthesis
  const obj = { name: 'test', value: 123;
  
  // JSX error - missing closing tag
  return (
    <div>
      <h1>Build Error Component</h1>
      <p>This has multiple build errors
      <button onClick={nonExistentFunction}>Click me</button>
    </div>
  );
}
