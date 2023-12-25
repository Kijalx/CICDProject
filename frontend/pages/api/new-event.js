// /api/new-meetup

async function handler(req, res) { // can be called anything you like
    const response = await fetch('http://localhost:8081/addEvent', {
        method: 'POST',
        body: JSON.stringify(req.body),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);
    res.json(data)
}

export default handler;
