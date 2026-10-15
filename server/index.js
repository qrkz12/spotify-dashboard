import express from 'express';
import dotenv from 'dotenv';

dotenv.config()
console.log('Client ID loaded:', Boolean(process.env.SPOTIFY_CLIENT_ID));

const clientId = process.env.SPOTIFY_CLIENT_ID // spotify client ID using env
const loginUrl = "https://accounts.spotify.com/authorize"



const app = express();
const PORT = 8888;

app.get('/login', (req, res) => {console.log('LOGIN ROUTE HIT');

    res.redirect(loginUrl +"?client_id=" +clientId +"&response_type=code");
});

app.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}`);
})


