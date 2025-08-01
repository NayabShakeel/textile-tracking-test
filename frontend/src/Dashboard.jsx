import { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard({ scannedData }) {
  const [cloths, setCloths] = useState([]);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios.get('/api/cloths')
      .then(response => setCloths(response.data))
      .catch(error => console.error('Error fetching cloths:', error));

    axios.get('/api/logs')
      .then(response => setLogs(response.data))
      .catch(error => console.error('Error fetching logs:', error));
  }, []);

  useEffect(() => {
    if (scannedData) {
      const [cloth_id, process_name] = scannedData.split(':');
      const process_id = process_name === 'DYEING' ? 3 : process_name === 'WEAVING' ? 2 : 1;

      const logOnce = async () => {
        try {
          await axios.post('/api/logs', { cloth_id, process_id, status: 'Completed' });
          const res = await axios.get('/api/logs');
          setLogs(res.data);
        } catch (error) {
          console.error('Error adding log:', error);
        }
      };

      logOnce();
    }
  }, [scannedData]);

  return (
    <div>
      <h2>Cloth Status</h2>
      <table>
        <thead>
          <tr>
            <th>Cloth ID</th>
            <th>Type</th>
            <th>Client Order</th>
          </tr>
        </thead>
        <tbody>
          {cloths.map(cloth => (
            <tr key={cloth.cloth_id}>
              <td>{cloth.cloth_id}</td>
              <td>{cloth.cloth_type}</td>
              <td>{cloth.client_order}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Process Logs</h2>
      <table>
        <thead>
          <tr>
            <th>Cloth ID</th>
            <th>Process</th>
            <th>Status</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {logs.map(log => (
            <tr key={log.log_id}>
              <td>{log.cloth_id}</td>
              <td>{log.Processes.process_name}</td>
              <td>{log.status}</td>
              <td>{new Date(log.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;

