const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

app.get('/api/cloths', async (req, res) => {
  const { data, error } = await supabase.from('Cloths').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

app.post('/api/logs', async (req, res) => {
  const { cloth_id, process_id, status } = req.body;
  const { data, error } = await supabase
    .from('Process_Logs')
    .insert([{ cloth_id, process_id, status }]);
  if (error) return res.status(500).json({ error: error.message });
  res.json({ message: 'Log added successfully' });
});

app.get('/api/logs', async (req, res) => {
  const { data, error } = await supabase
    .from('Process_Logs')
    .select('*, Cloths(cloth_id, cloth_type), Processes(process_name)')
    .order('timestamp', { ascending: false });
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

app.listen(3000, () => console.log('Backend running on port 3000'));

