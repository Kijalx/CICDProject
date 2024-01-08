async function handler(req, res) { // can be called anything you like
  const response = await fetch('http://login:8082/getlogin', {
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
