import React, { useState, useEffect, useRef } from 'react';

const GeneratorComponent = ({ generatorName, inputText = '[$output]' }) => {
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const iframeRef = useRef(null);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data.type === 'evaluateTextResponse' && event.data.callerId === '85295798546246') {
        if (event.data.text) {
          setResult(event.data.text);
        } else {
          setError('Failed to get response from generator');
        }
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const evaluateText = async () => {
    if (!generatorName) {
      setError('Generator name is required');
      return;
    }

    const generatorUrl = `https://perchance.org/${generatorName}`;
    if (iframeRef.current) {
      try {
        console.log('Sending evaluateText command to iframe...');
        iframeRef.current.contentWindow.postMessage(
          { text: inputText, callerId: '85295798546246', command: 'evaluateText' },
          '*'
        );
      } catch (err) {
        console.error('Error communicating with iframe:', err);
        setError('Error communicating with iframe');
      }
    }
  };

  return (
    <div>
      <button onClick={evaluateText}>Evaluate Text</button>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {result && <p>Result: {result}</p>}
      <iframe
        ref={iframeRef}
        src={`https://perchance.org/${generatorName}`}
        style={{ width: '100%', height: '400px', border: 'none' }}
        onLoad={() => console.log('Iframe loaded')}
      />
    </div>
  );
};

export default GeneratorComponent;
