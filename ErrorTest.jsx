import React from 'react';
import { Card } from './Card.jsx';
import { formatTitle } from './text-utils.js';

export default function ErrorTest() {
  const apiBase = window.__APP_API_URL__.trim();
  const title = formatTitle('Broken build example');

  return (
    <section>
      <h1>{title}</h1>
      <Card title={title} />
      <p>API Base: {apiBase}</section>
  );
}