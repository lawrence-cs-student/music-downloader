const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const https = require('https');
const cors = require('cors');
app.use(cors());
// app.use(express.urlencoded({ extended: true })); 
app.use(express.text());

const youtube_parser = require('./Extractor')

app.get("/", (req ,res) => {
    res.send("Hello")
})


app.post('/api', (req, res) => {

    const link = req.body;
    console.log(link);

    try {
        
        const headers = {
            'X-RapidApi-Key': '618a3f14e8mshb4a467eb0c5c946p16ed53jsn71421e89fc8d',
            'X-RapidAPI-Host': 'youtube-audio-video-download.p.rapidapi.com'
        };

        const options = {
            method: 'GET',
            hostname: 'youtube-mp36.p.rapidapi.com',
            port: null,
            path: `/dl?id=${youtube_parser(req.body)}`,
            headers: {
                'X-RapidAPI-Key': '618a3f14e8mshb4a467eb0c5c946p16ed53jsn71421e89fc8d',
                'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
            }
        };

        const apiRequest = https.request(options, (apiResponse) => {
            let data ='';

            apiResponse.on('data', (chunk) => {
                data += chunk
            });

            apiResponse.on('end', () => {
                try {
                    console.log(data)
                    const parsedData = JSON.parse(data);

                    if (parsedData) {
                        console.log(parsedData)
                        res.json(parsedData)
                    } else {
                        res.status(500).json({ error: 'Error parsing API response'})
                    }
                } catch (error) {
                    console.log(error);
                }
            });

        });

        apiRequest.end();


    } catch (error) {
        console.log(error)
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})