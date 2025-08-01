export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ message: "Scanned item fetched successfully" });
  } else if (req.method === 'POST') {
    // Replace with your own DB logic
    res.status(200).json({ message: "Data saved to DB" });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
