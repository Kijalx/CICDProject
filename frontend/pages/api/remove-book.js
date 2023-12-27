async function removeBook(req, res) {
  try {
    const response = await fetch('http://book:8080/removeBook', {
      method: 'POST',
      body: JSON.stringify({ bookID: req.body.bookID }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    console.log(data);
    if (data.deleteBookResponse === 'success') {
      res.status(200).json(data);
    } else {
      console.error('Error removing book:', data);
      res.status(500).json({ error: 'Failed to remove book' });
    }
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export default removeBook;
