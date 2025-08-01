import { useState } from 'react';
import Scanner from './Scanner.jsx';
import Dashboard from './Dashboard.jsx';

function App() {
  const [scannedData, setScannedData] = useState('');

  const handleScan = (data) => {
    setScannedData(data);
  };

  return (
    <div>
      <h1>Textile Tracking Test System</h1>
      <Scanner onScan={handleScan} />
      <p><strong>Scanned Data:</strong> {scannedData || "No data scanned yet"}</p>
      <Dashboard scannedData={scannedData} />
    </div>
  );
}

export default App;

