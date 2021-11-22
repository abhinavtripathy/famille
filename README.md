# Famille - MetroHacks 2021

## Inspiration
The underlying inspiration for the project was my grandfather who recently passed away and had Alzheimer's. Being really close to him exposed me to the troubles and difficulties for people with Alzheimer's. I saw an opportunity for a web app that could help a lot of people by assisting them through a platform fueled by family and memories. 

## What it does
Famille stores information about your family and display a family tree where the user is highlighted so that they can see where they are in their family tree. It supports images and nicknames and "partner" and "parent" relations in terms of the tree. Famille also stores memories and uses Google Cloud Vision API with Face Annotation, Emotion Detection & Label Detection to give context on images as well as detect emotions so one can filter for only happy images. It also provides questions from memories and family information as a "daily check in" to help people remember more about their memories and families and encourage them to remember more. 

## How we built it
The frontend is built with VueJS. The backend is a micro-services architecture with containerization of two NodeJS services. I used Postgres as a database for storing all the relational data. I also used the google cloud vision API. I used docker for dockerization. 

## Challenges we ran into
I think one of the challenges was to interact, filter and understand the backend logic for the cloud vision API. I also had many crashes of the express server and found ways to mitigate that. I also had to learn VueJS as I wasn't familiar with it. Doing everything myself was also a big challenge considering I had an ambitious goal. 

## Accomplishments that we're proud of
Famille I think has a future in terms of helping people with Alzheimer's. I am really proud of the impact it cold have. I am also proud that I could get something working together in 24 hours and working just my by myself.

## What we learned
I learned a lot about building my technical skills such as VueJS, docker. I also learned about thinking about social good and how technology can help in that area. 

## What's next for Famille - Helping Alzheimer affected humans
I hope to continue working on Famille as I feel it can make a genuine impact on people's lives. Some next steps would be to clean out some code, add some new features and work on deployment. 
