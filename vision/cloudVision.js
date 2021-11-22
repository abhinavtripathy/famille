const express = require('express')

const pgPromise = require('pg-promise')
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
const cors = require('cors')
app.use(cors());

// Postgres Setup
const pgp = pgPromise({
    connect(client) {
        console.log('Connected to database:', client.connectionParameters.database);
    },
    disconnect(client) {
        console.log('Disconnected from database:', client.connectionParameters.database);
    }

});

// Local PostgreSQL credentials
const username = 'postgres';
const password = 'postgres';

const url = process.env.DATABASE_URL || `postgres://${username}:${password}@localhost/`;
const db = pgp(url);


async function connectAndRun(task) {
    let connection = null;

    try {
        connection = await db.connect();
        return await task(connection);
    } finally {
        try {
            connection.done();
        } catch (ignored) {
            // ignore 
        }
    }
}


app.post('/vision', async(req, res) => {
    let data = req.body

    for(let i in data) {
        if(data[i]['name'].length != 0) {
            let visionData = await isHappy(data[i]['img'])
            await connectAndRun(db => db.none('INSERT INTO memories(name, img, labels, happy) VALUES ($1, $2, $3, $4);', [data[i]['name'], data[i]['img'], visionData[1], visionData[0]]));
        }
    }
    
    res.send({'message':'success'})
})

async function isHappy(img_link) {
    const vision = require('@google-cloud/vision');
    const client = new vision.ImageAnnotatorClient();
    const [result] = await client.faceDetection(img_link);
    const [labelResult] = await client.labelDetection(img_link)
    const faces = result.faceAnnotations;
    const labels = labelResult.labelAnnotations;
    let allLabels = ""
    labels.forEach(label=> allLabels+= label.description + ",")

    let count = 0
    let notCount = 0
    faces.forEach((face, i) => {
    if(face.joyLikelihood == 'VERY_LIKELY') {
        count++
    }
    else {
        notCount++
    }
    
    });
    return [count > notCount ? true:false, allLabels]
}


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });