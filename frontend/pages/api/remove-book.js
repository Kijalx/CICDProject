// pages/api/remove-book.js
async function removeBook(req, res) {
    try {
      const response = await fetch('http://nodejs:8000/removeBook', {
        method: 'POST',
        body: JSON.stringify({ _id: req.body._id }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      const data = await response.json();
  
      if (response.ok) {
        res.status(200).json(data);
      } else {
        res.status(response.status).json(data);
      }
    } catch (error) {
      console.error('Error removing book:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  
  export default removeBook;
  