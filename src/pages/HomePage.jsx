import React from 'react';
import Layout from './Layout';

const HomePage = () => {
  return (
    <Layout>
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h1>Página Inicial (Home)</h1>
        <p>Bem-vindo à Digital Store!</p>
      </div>
    </Layout>
  );
};

export default HomePage;