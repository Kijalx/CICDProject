// /api/new-meetup

async function handler(req, res) { // can be called anything you like
  const response = await fetch('http://nodejs:8000/saveBook', {
    method: 'POST',
    body: JSON.stringify(req.body),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();
  res.json(data)
}

export default handler;
