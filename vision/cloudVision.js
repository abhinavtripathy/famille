
const express = require('express')

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
const cors = require('cors')
app.use(cors());

app.get('/test', async(req, res) => {
    res.send({'message':'success'})
})

app.get('/vision', async(req, res) => {
    let data = await isHappy("https://images.megapixl.com/5267/52672071.jpg")
    res.send({'message':JSON.stringify(data)})
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