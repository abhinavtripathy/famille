import express from 'express';
import pgPromise from 'pg-promise';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public/'));
app.use(express.json());
import cors from 'cors'
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

// Helper functions 

async function postFamily(id, username, pid, ppid, title, img, main_user, tag) {
    await connectAndRun(db => db.none('INSERT INTO family(id, username, pid, ppid, title, img, main_user, tag) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);', [id, username, pid, ppid, title, img, main_user, tag]));
}

app.get('/family', async (req, res) => {
    let result = await connectAndRun(db => db.any('select * from family order by id'))
    console.log(result)
    res.send(JSON.stringify(result))
})

app.post('/family', async (req, res) => {
    const data = req.body
    for(let i in data) {
        
        if(data[i]['name'].length != 0) {
            console.log(data[i])
            
            if(data[i]['pid'].length != 0 && data[i]['ppid'].length == 0) {
                postFamily(data[i]['id'], data[i]['name'], data[i]['pid'], null, data[i]['nickname'], data[i]['img'], data[i]['main_user'], 'partner')
            }
            else if(data[i]['pid'].length == 0 && data[i]['ppid'].length != 0) {
                let pid1 = data[i]['ppid'].split(',')[0]
                let pid2 = data[i]['ppid'].split(',')[1]
                postFamily(data[i]['id'], data[i]['name'], pid1, pid2, data[i]['nickname'], data[i]['img'], data[i]['main_user'], null)
            }
            else {
                postFamily(data[i]['id'], data[i]['name'], null, null, data[i]['nickname'], data[i]['img'], data[i]['main_user'], null)
            }
        }
    }
    res.send({
        'message': 'success'
    });
})

app.get('/partner', async (req, res) =>{
    let result = await connectAndRun(db => db.any('select * from family where id = 2'))
    console.log(result)
    res.send(JSON.stringify(result))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});