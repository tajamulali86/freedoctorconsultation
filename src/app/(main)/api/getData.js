export default async function getData(req, res) {
    try {
      const response = await fetch('http://localhost:8000/api/patients');
      const data = await response();
      res.status(200).json(data);
    } catch (error) {
      res.status(500)({ error: 'Internal Server Error' });
    }
  }