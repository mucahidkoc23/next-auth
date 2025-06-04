'use client';

import React from 'react';

const CSRPage: React.FC = () => {
  return (
    <>
      <div
        className="mb-5"
        data-testid="csr"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100vw', 
          fontSize: '32px'
        }}>
        Müşteri Sayfası
      </div>
    </>
  );
};

export default CSRPage;
