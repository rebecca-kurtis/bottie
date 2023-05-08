const express = require('express');
const cors = require('cors');
import promptGPT from "./helpers/promptGPT";
const app = express();
const axios = require('axios').default
const dotenv = require('dotenv')
dotenv.config()

app.use(cors());
app.use(express.json());

app.post('/chatGPT', (req, res) => {
  const relationship = req.body.relationship;
  const proseStyle = req.body.proseStyle;
  const occasion = req.body.occasion;
  const theme = req.body.themes;
  const mood = req.body.mood;
  //this axios promis is to chatGPT.
  axios({
    method: 'post',
    url: "https://api.openai.com/v1/chat/completions",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
    },
    data: {
      "model": "gpt-3.5-turbo",
      "messages": [{ "role": "user", "content": promptGPT(relationship, proseStyle, occasion, theme, mood) }],
      temperature: 1,
      max_tokens: 256
    }
  }).then(function (response) {
    const message = response.data.choices[0].message.content
    console.log("generated:", message);
    res.status(200).json({ message });
  });

});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});