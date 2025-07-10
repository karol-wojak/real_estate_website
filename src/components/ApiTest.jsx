// src/components/ApiTest.jsx
import React, { useState, useEffect } from 'react';
import { fetchPortfolioProjects } from '../api/strapi';

const ApiTest = () => {
  const [status, setStatus] = useState('Loading...');
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [browserInfo, setBrowserInfo] = useState('');

  useEffect(() => {
    // Detect browser
    const userAgent = navigator.userAgent;
    let browser = 'Unknown';
    if (userAgent.includes('Firefox')) browser = 'Firefox';
    else if (userAgent.includes('Chrome')) browser = 'Chrome';
    else if (userAgent.includes('Safari')) browser = 'Safari';
    else if (userAgent.includes('Edge')) browser = 'Edge';
    
    setBrowserInfo(`${browser} - ${userAgent}`);

    const testApi = async () => {
      try {
        setStatus('Testing API connection...');
        
        // Test direct fetch first
        console.log('Testing direct fetch to Strapi...');
        const directResponse = await fetch('http://localhost:1337/api/portfolio-projects?populate=*', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          mode: 'cors',
        });
        
        if (!directResponse.ok) {
          throw new Error(`Direct fetch failed: ${directResponse.status} ${directResponse.statusText}`);
        }
        
        const directData = await directResponse.json();
        console.log('Direct fetch successful:', directData);
        
        // Now test through our API function
        setStatus('Testing through API function...');
        const apiData = await fetchPortfolioProjects();
        
        setData({
          directFetch: directData,
          apiFunction: apiData,
          count: apiData.length
        });
        setStatus('✅ API test successful!');
        
      } catch (err) {
        console.error('API test failed:', err);
        setError(err.message);
        setStatus('❌ API test failed');
      }
    };

    testApi();
  }, []);

  return (
    <div style={{ 
      padding: '20px', 
      border: '2px solid #ccc', 
      margin: '20px', 
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      <h2>🔧 API Connection Test</h2>
      
      <div style={{ marginBottom: '15px' }}>
        <strong>Browser:</strong> {browserInfo}
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <strong>Status:</strong> <span style={{ 
          color: status.includes('✅') ? 'green' : status.includes('❌') ? 'red' : 'orange' 
        }}>{status}</span>
      </div>
      
      {error && (
        <div style={{ 
          backgroundColor: '#ffe6e6', 
          border: '1px solid #ff9999', 
          padding: '10px', 
          borderRadius: '4px',
          marginBottom: '15px'
        }}>
          <strong>Error:</strong> {error}
        </div>
      )}
      
      {data && (
        <div style={{ 
          backgroundColor: '#e6ffe6', 
          border: '1px solid #99ff99', 
          padding: '10px', 
          borderRadius: '4px'
        }}>
          <strong>Success!</strong> Found {data.count} portfolio projects
          <details style={{ marginTop: '10px' }}>
            <summary>View Raw Data</summary>
            <pre style={{ 
              backgroundColor: '#fff', 
              padding: '10px', 
              fontSize: '12px',
              overflow: 'auto',
              maxHeight: '300px'
            }}>
              {JSON.stringify(data, null, 2)}
            </pre>
          </details>
        </div>
      )}
      
      <div style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        <p><strong>Test Instructions:</strong></p>
        <ol>
          <li>Open this page in Chrome - should work ✅</li>
          <li>Open this page in Firefox - check if it shows "Upgrade Required" error</li>
          <li>Check browser console for detailed error messages</li>
        </ol>
      </div>
    </div>
  );
};

export default ApiTest;
